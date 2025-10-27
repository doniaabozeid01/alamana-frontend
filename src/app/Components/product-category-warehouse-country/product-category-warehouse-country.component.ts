import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Item {
  id: number;
  nameEn: string;
  nameAr: string;
  price: number;
  currencyEn: string;
  currencyAr: string;
  currencyCode: string;

}


@Component({
  selector: 'app-product-category-warehouse-country',
  templateUrl: './product-category-warehouse-country.component.html',
  styleUrls: ['./product-category-warehouse-country.component.scss']
})
export class ProductCategoryWarehouseCountryComponent {

  constructor(private router: Router, private api: ApiService, private activatedroute: ActivatedRoute) { }
  items: Item[] = [];
  categoryId: number = 0;
  warehouseId: number = 0;
  editMode = false;
  editId: number | null = null;
  newItem: Item = { id: 0, nameEn: '', nameAr: '', price: 0, currencyEn: '', currencyAr: '', currencyCode: '' };


  ngOnInit() {
    this.categoryId = Number(this.activatedroute.snapshot.paramMap.get('categoryId'));
    this.warehouseId = Number(this.activatedroute.snapshot.paramMap.get('warehouseId'));
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
    this.newItem = { id: 0, nameEn: '', nameAr: '', price: 0, currencyEn: '', currencyAr: '', currencyCode: '' };
  }

  updateItem() {

    this.api.UpdateCategory(this.newItem.id, this.newItem).subscribe({
      next: (response) => {
        console.log(response);
        this.cancelEdit();
        this.getProductsByCategory()
      }
    })
  }

  deleteItem(id: number) {
    this.api.DeleteProduct(id).subscribe({
      next: (response) => {
        console.log(response);
        this.getProductsByCategory()
      }
    })
  }


  getProductsByCategory() {
    this.api.productsByCategory(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.items = response.data.products;
      }
    })
  }


  addProduct() {
    console.log(this.categoryId);
    
    this.router.navigate(['assign-new-product', this.categoryId, this.warehouseId])
  }






}
