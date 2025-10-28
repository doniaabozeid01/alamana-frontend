import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Item {
  id: number;
  productId: number;
  nameEn: string;
  nameAr: string;
  price: number;
  currencyEn: string;
  currencyAr: string;
  countryCode: string;

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
  newItem: Item = {id:0, productId: 0, nameEn: '', nameAr: '', price: 0, currencyEn: '', currencyAr: '', countryCode: '' };


  ngOnInit() {
    this.categoryId = Number(this.activatedroute.snapshot.paramMap.get('categoryId'));
    this.warehouseId = Number(this.activatedroute.snapshot.paramMap.get('warehouseId'));
    this.GetProductsByWarehouseCategoryAndCountry();
  }


  deleteItem(id: number) {
    this.api.DeleteByWarehouseIdAndProductId(this.warehouseId,id).subscribe({
      next: (response) => {
        console.log(response);
        this.GetProductsByWarehouseCategoryAndCountry();
      }
    })
  }


  GetProductsByWarehouseCategoryAndCountry() {
    this.api.GetProductsByWarehouseCategoryAndCountry(this.warehouseId,this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.items = response.data;
      }
    })
  }


  addProduct() {
    console.log(this.categoryId);
    
    this.router.navigate(['/dashboard/assign-new-product', this.categoryId, this.warehouseId])
  }






}
