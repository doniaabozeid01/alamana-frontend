import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWarehouseCategoriesAndProductsComponent } from './add-warehouse-categories-and-products.component';

describe('AddWarehouseCategoriesAndProductsComponent', () => {
  let component: AddWarehouseCategoriesAndProductsComponent;
  let fixture: ComponentFixture<AddWarehouseCategoriesAndProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWarehouseCategoriesAndProductsComponent]
    });
    fixture = TestBed.createComponent(AddWarehouseCategoriesAndProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
