import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Warehouse {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  categoryId: number;
  name: string;
}

@Component({
  selector: 'app-add-warehouse-categories-and-products',
  templateUrl: './add-warehouse-categories-and-products.component.html',
  styleUrls: ['./add-warehouse-categories-and-products.component.scss'],
})
export class AddWarehouseCategoriesAndProductsComponent {

  constructor(private router : Router){}

  warehouses: Warehouse[] = [
    { id: 1, name: 'Main Warehouse' },
    { id: 2, name: 'Secondary Warehouse' },
  ];

  categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Furniture' },
    { id: 3, name: 'Clothing' },
  ];

  products: Product[] = [
    { id: 1, categoryId: 1, name: 'Laptop' },
    { id: 2, categoryId: 1, name: 'Mobile' },
    { id: 3, categoryId: 2, name: 'Chair' },
    { id: 4, categoryId: 2, name: 'Table' },
    { id: 5, categoryId: 3, name: 'Shirt' },
    { id: 6, categoryId: 3, name: 'Pants' },
  ];

  selectedCategoryIds: number[] = [];
  selectedProducts: { [categoryId: number]: number[] } = {};

toggleCategory(categoryId: number, event: any) {
  if (event.target.checked) {
    // أضف الـ Category للـ selected
    this.selectedCategoryIds.push(categoryId);
    this.selectedProducts[categoryId] = [];

    // افتح المنتجات تلقائيًا عند الاختيار
    this.categoryOpen[categoryId] = true;
  } else {
    this.selectedCategoryIds = this.selectedCategoryIds.filter(id => id !== categoryId);
    delete this.selectedProducts[categoryId];
    this.categoryOpen[categoryId] = false;
  }
}


  getCategoryName(categoryId: number) {
    return this.categories.find((c) => c.id === categoryId)?.name || '';
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter((p) => p.categoryId === categoryId);
  }

  toggleProduct(categoryId: number, productId: number, event: any) {
    if (!this.selectedProducts[categoryId]) {
      this.selectedProducts[categoryId] = [];
    }
    if (event.target.checked) {
      this.selectedProducts[categoryId].push(productId);
    } else {
      this.selectedProducts[categoryId] = this.selectedProducts[
        categoryId
      ].filter((id) => id !== productId);
    }
  }

  isProductSelected(categoryId: number, productId: number) {
    return this.selectedProducts[categoryId]?.includes(productId) || false;
  }

  saveAssignments() {
    console.log('Selected Categories:', this.selectedCategoryIds);
    console.log('Selected Products:', this.selectedProducts);
    alert('✅ Assignments saved successfully!');
    this.router.navigate(['countries'])
  }

  categoryOpen: { [categoryId: number]: boolean } = {};

  toggleCategoryProducts(categoryId: number) {
    this.categoryOpen[categoryId] = !this.categoryOpen[categoryId];
  }
}
