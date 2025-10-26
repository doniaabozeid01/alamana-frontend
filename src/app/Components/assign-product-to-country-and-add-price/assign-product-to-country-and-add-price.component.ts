import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Product {
  id: number;
  nameEn: string;
  nameAr: string;
}

@Component({
  selector: 'app-assign-product-to-country-and-add-price',
  templateUrl: './assign-product-to-country-and-add-price.component.html',
  styleUrls: ['./assign-product-to-country-and-add-price.component.scss'],
})
export class AssignProductToCountryAndAddPriceComponent {
  countryId = 0;

  products: Product[] = [];
  newItem: { productId: number | null; amount: 0 } = {
    productId: null,
    amount: 0,
  };

  constructor(
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // ده warehouseId من مسار الصفحة
    this.countryId = Number(
      this.activatedRoute.snapshot.paramMap.get('countryId')
    );

    this.getAllProducts();
  }

  getAllProducts() {
    this.api.getAllProducts().subscribe({
      next: (response) => {
        // اختاري واحدة حسب شكل الـAPI عندك:
        this.products = response.data?.products ?? response.data ?? [];
        console.log(response);
      },
    });
  }

  saveItem() {
    if (!this.newItem.productId || !this.countryId) return;

    const body = {
      countryId: this.countryId,
      productId: this.newItem.productId,
      amount: this.newItem.amount,
    };

    this.api.CreateProductCountryPrice(body).subscribe({
      next: (response) => {
        console.log(response);
        // إعادة ضبط الحقل
        this.newItem = { productId: null, amount: 0 };
        // لو عايزة ترجعي لصفحة عرض فئات المخزن:
        this.router.navigate(['assign-product-to-country-and-add-price', this.countryId]);
      },
    });
  }

  done() {
    // رجوع للي يناسبك
    this.router.navigate([
      'country-products-data',
      this.countryId,
    ]);
  }
}
