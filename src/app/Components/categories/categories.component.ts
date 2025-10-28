import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(private router: Router, private api: ApiService) { }
  items: Item[] = [];


  ngOnInit() {
    this.getAllCategories();

  }

  editMode = false;
  editId: number | null = null;
  newItem: Item = { id: 0, nameEn: '', nameAr: '', descriptionEn: '', descriptionAr: '', slug: '' };

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
    console.log(this.newItem);
    this.api.UpdateCategory(this.newItem.id, this.newItem).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllCategories();
        this.cancelEdit();
      }
    })
  }

  deleteItem(id: number) {
    // if (confirm('Are you sure you want to delete this item?')) {
    //   this.items = this.items.filter(i => i.id !== id);
    //   alert('✅ Item deleted successfully!');
    // }

    this.api.DeleteCategory(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.getAllCategories();
        
      }
    })
  }


  getProducts(category: any) {
    this.router.navigate(['/dashboard/products',category.id])
  }


  getAllCategories() {
    this.api.getAllCategories().subscribe({
      next: (response) => {
        this.items = response.data.items;
        console.log(response);
      }
    })
  }
}

