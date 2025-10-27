import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseCategoryAssignComponent } from './warehouse-category-assign.component';

describe('WarehouseCategoryAssignComponent', () => {
  let component: WarehouseCategoryAssignComponent;
  let fixture: ComponentFixture<WarehouseCategoryAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehouseCategoryAssignComponent]
    });
    fixture = TestBed.createComponent(WarehouseCategoryAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
