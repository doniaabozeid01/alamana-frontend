import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Category {
  id: number;
  nameEn: string;
  nameAr: string;
}

@Component({
  selector: 'app-assign-new-caetgory-to-warehouse',
  templateUrl: './assign-new-caetgory-to-warehouse.component.html',
  styleUrls: ['./assign-new-caetgory-to-warehouse.component.scss']
})
export class AssignNewCaetgoryToWarehouseComponent implements OnInit {
  warehouseId = 0;

  categories: Category[] = [];
  newItem: { categoryId: number | null } = { categoryId: null };

  constructor(
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // ده warehouseId من مسار الصفحة
    this.warehouseId = Number(this.activatedRoute.snapshot.paramMap.get('warehouseId'));
    this.getAllCategories();
  }

  getAllCategories() {
    this.api.getAllCategories().subscribe({
      next: (response) => {
        // اختاري واحدة حسب شكل الـAPI عندك:
        this.categories = response.data?.items ?? response.data ?? [];
        console.log(response);
      }
    });
  }

  saveItem() {
    if (!this.newItem.categoryId || !this.warehouseId) return;

    const body = {
      warehouseId: this.warehouseId,
      categoryId: this.newItem.categoryId
    };

    this.api.CreateWarehouseCategory(body).subscribe({
      next: (response) => {
        console.log(response);
        // إعادة ضبط الحقل
        this.newItem = { categoryId: null };
        // لو عايزة ترجعي لصفحة عرض فئات المخزن:
        // this.router.navigate(['category-assignment', this.warehouseId]);
      }
    });
  }

  done() {
    // رجوع للي يناسبك
    this.router.navigate(['category-assignmnt',this.warehouseId]);
  }
}
