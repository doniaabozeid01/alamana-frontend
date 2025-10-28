import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Categories {
  id: number;
  nameEn: string;
  nameAr: string;
}

@Component({
  selector: 'app-warehouse-category-assign',
  templateUrl: './warehouse-category-assign.component.html',
  styleUrls: ['./warehouse-category-assign.component.scss']
})
export class WarehouseCategoryAssignComponent {
  warehouseId: number = 0;

  constructor(private router: Router, private api: ApiService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.warehouseId = Number(this.activatedroute.snapshot.paramMap.get('warehouseId'));
    this.getAllCategoriesByWarehouseId();
  }

  categories: Categories[] = [];


  deleteCategoryAssignment(categoryId: number) {
    this.api.DeleteByWarehouseIdAndCtegoryId(this.warehouseId,categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllCategoriesByWarehouseId();
      }
    })
  }


  assignCategory() {
    this.router.navigate(['/dashboard/assign-new-category', this.warehouseId]);
  }


  getAllCategoriesByWarehouseId() {
    this.api.GetCategoriesByWarehouseId(this.warehouseId).subscribe({
      next: (response) => {
        console.log(response);
        this.categories = response.data;
        console.log(this.categories);
        
      },
      error: (err) => {
        if (err.error.status) {
          this.categories = [];
        }
      }
    })
  }


  getProducts(id:number) {
    this.router.navigate(['/dashboard/product-category-warehouse-country', this.warehouseId,id])
  }


}
