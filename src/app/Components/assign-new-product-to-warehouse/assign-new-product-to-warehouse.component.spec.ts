import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignNewProductToWarehouseComponent } from './assign-new-product-to-warehouse.component';

describe('AssignNewProductToWarehouseComponent', () => {
  let component: AssignNewProductToWarehouseComponent;
  let fixture: ComponentFixture<AssignNewProductToWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignNewProductToWarehouseComponent]
    });
    fixture = TestBed.createComponent(AssignNewProductToWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
