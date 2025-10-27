import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignNewCaetgoryToWarehouseComponent } from './assign-new-caetgory-to-warehouse.component';

describe('AssignNewCaetgoryToWarehouseComponent', () => {
  let component: AssignNewCaetgoryToWarehouseComponent;
  let fixture: ComponentFixture<AssignNewCaetgoryToWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignNewCaetgoryToWarehouseComponent]
    });
    fixture = TestBed.createComponent(AssignNewCaetgoryToWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
