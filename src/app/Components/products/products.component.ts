import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Item {
  id: number;
  nameEn: string;
  nameAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  // isActive: boolean;
  slug?: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private router: Router, private api: ApiService, private activatedroute: ActivatedRoute) { }
  items: Item[] = [];
  categoryId: number = 0;
  editMode = false;
  editId: number | null = null;
  newItem: Item = { id: 0, nameEn: '', nameAr: '', descriptionEn: '', descriptionAr: '', slug: '' };


  ngOnInit() {
    this.categoryId = Number(this.activatedroute.snapshot.paramMap.get('categoryId'));
    this.getProductsByCategory();
  }

  editItem(item: Item) {
    this.editMode = true;
    this.editId = item.id;
    this.newItem = { ...item };
  }

  cancelEdit() {
    this.editMode = false;
    this.editId = null;
    this.newItem = { id: 0, nameEn: '', nameAr: '', descriptionEn: '', descriptionAr: '', slug: '' };
  }

  updateItem() {
    // const index = this.items.findIndex(i => i.id === this.editId);
    // if (index > -1) {
    //   this.items[index] = { ...this.newItem };
    //   this.cancelEdit();
    //   alert('✅ Item updated successfully!');
    // }


    this.api.UpdateCategory(this.newItem.id, this.newItem).subscribe({
      next: (response) => {
        console.log(response);
        this.cancelEdit();
        this.getProductsByCategory()
      }
    })

  }

  deleteItem(id: number) {
    // if (confirm('Are you sure you want to delete this item?')) {
    //   this.items = this.items.filter(i => i.id !== id);
    //   alert('✅ Item deleted successfully!');
    // }

    this.api.DeleteProduct(id).subscribe({
      next: (response) => {
        console.log(response);
        this.getProductsByCategory();
      }
    })
  }


  getProductsByCategory() {
    this.api.productsByCategory(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.items = response.data.products;
      },error:(err)=>{
        console.log(err);
        this.items = [];
      }
    })
  }


  addProduct() {
    this.router.navigate(['/dashboard/add-product', this.categoryId])
  }
}

