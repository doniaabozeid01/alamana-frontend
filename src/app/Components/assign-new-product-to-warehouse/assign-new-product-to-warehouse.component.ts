import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Product {
  id: number;
  nameEn: string;
  nameAr: string;
}

@Component({
  selector: 'app-assign-new-product-to-warehouse',
  templateUrl: './assign-new-product-to-warehouse.component.html',
  styleUrls: ['./assign-new-product-to-warehouse.component.scss']
})
export class AssignNewProductToWarehouseComponent {
  categoryId = 0;
  warehouseId = 0;

  products: Product[] = [];
  newItem: { productId: number | null } = { productId: null };

  constructor(
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // ده warehouseId من مسار الصفحة
    this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'));
    this.warehouseId = Number(this.activatedRoute.snapshot.paramMap.get('warehouseId'));
    this.getAllProducts();
  }

  getAllProducts() {
    this.api.productsByCategory(this.categoryId).subscribe({
      next: (response) => {
        // اختاري واحدة حسب شكل الـAPI عندك:
        this.products = response.data?.products ?? response.data ?? [];
        console.log(response);
      }
    });
  }

  saveItem() {
    if (!this.newItem.productId || !this.warehouseId) return;

    const body = {
      warehouseId: this.warehouseId,
      productId: this.newItem.productId
    };

    this.api.CreateWarehouseProduct(body).subscribe({
      next: (response) => {
        console.log(response);
        // إعادة ضبط الحقل
        this.newItem = { productId: null };
        // لو عايزة ترجعي لصفحة عرض فئات المخزن:
        // this.router.navigate(['category-assignment', this.warehouseId]);
      }
    });
  }

  done() {
    // رجوع للي يناسبك
    this.router.navigate(['/dashboard/product-category-warehouse-country',this.warehouseId,this.categoryId]);
  }
}
