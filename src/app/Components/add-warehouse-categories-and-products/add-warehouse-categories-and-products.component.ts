import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Warehouse { id: number; name: string; }
interface Product   { id: number; nameEn: string; nameAr: string; }
interface Category  { id: number; nameEn: string; nameAr: string; products: Product[]; }

@Component({
  selector: 'app-add-warehouse-categories-and-products',
  templateUrl: './add-warehouse-categories-and-products.component.html',
  styleUrls: ['./add-warehouse-categories-and-products.component.scss'],
})
export class AddWarehouseCategoriesAndProductsComponent {
  constructor(private router: Router, private api: ApiService,private activatedRoute:ActivatedRoute) {}

  categories: Category[] = [];
  // لو عندك قائمة مخازن جيباها من API، اربطيها هنا
  selectedWarehouseId = 0; // ← سيتيها من الـUI

  selectedCategoryIds: number[] = [];
  selectedProducts: { [categoryId: number]: number[] } = {};
  categoryOpen: { [categoryId: number]: boolean } = {};

  ngOnInit() {
    
    this.selectedWarehouseId = Number(this.activatedRoute.snapshot.paramMap.get('warehouseId'));

    this.api.getCategoriesWithProducts().subscribe({
      next: (res) => {
        this.categories = res.data;
      }
    });
  }

  toggleCategory(categoryId: number, event: any) {
    if (event.target.checked) {
      if (!this.selectedCategoryIds.includes(categoryId)) {
        this.selectedCategoryIds.push(categoryId);
      }
      // افتح المنتج تلقائياً
      this.categoryOpen[categoryId] = true;
      // لو أول مرة، حضّر مصفوفة المنتجات المختارة تحت الكاتيجوري
      if (!this.selectedProducts[categoryId]) this.selectedProducts[categoryId] = [];
    } else {
      this.selectedCategoryIds = this.selectedCategoryIds.filter(id => id !== categoryId);
      delete this.selectedProducts[categoryId]; // امسح كل المنتجات المختارة تحتها
      this.categoryOpen[categoryId] = false;
    }
  }

  toggleProduct(categoryId: number, productId: number, event: any) {
    if (!this.selectedProducts[categoryId]) this.selectedProducts[categoryId] = [];
    if (event.target.checked) {
      if (!this.selectedProducts[categoryId].includes(productId)) {
        this.selectedProducts[categoryId].push(productId);
      }
    } else {
      this.selectedProducts[categoryId] =
        this.selectedProducts[categoryId].filter(id => id !== productId);
    }
  }

  isProductSelected(categoryId: number, productId: number) {
    return this.selectedProducts[categoryId]?.includes(productId) || false;
  }

  saveAssignments() {
    // اجمع كل productsIds من كل الكاتيجوريز المختارة
    const productsIds = Object.values(this.selectedProducts).flat(); // number[]

    const payload = {
      warehouseId: this.selectedWarehouseId,      // ← لازم تكوني مخلية المستخدم يختار المخزن
      categoriesIds: this.selectedCategoryIds,    // number[]
      productsIds                                  // number[]
    };

    // (اختياري) تحققات سريعة قبل الإرسال
    if (!payload.warehouseId) { console.warn('اختر المخزن'); return; }
    if (payload.categoriesIds.length === 0 && payload.productsIds.length === 0) {
      console.warn('اختاري على الأقل فئة أو منتج'); return;
    }

    this.api.AssignWarehouseByProductsAndCategories(payload).subscribe({
      next: (response) => {
        console.log('Saved', response);
        this.router.navigate(['countries']);
      }
    });
  }

  toggleCategoryProducts(categoryId: number) {
    this.categoryOpen[categoryId] = !this.categoryOpen[categoryId];
  }
}
