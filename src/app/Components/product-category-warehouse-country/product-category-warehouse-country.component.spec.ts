import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryWarehouseCountryComponent } from './product-category-warehouse-country.component';

describe('ProductCategoryWarehouseCountryComponent', () => {
  let component: ProductCategoryWarehouseCountryComponent;
  let fixture: ComponentFixture<ProductCategoryWarehouseCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCategoryWarehouseCountryComponent]
    });
    fixture = TestBed.createComponent(ProductCategoryWarehouseCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
