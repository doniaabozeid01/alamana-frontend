import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProductToCountryAndAddPriceComponent } from './assign-product-to-country-and-add-price.component';

describe('AssignProductToCountryAndAddPriceComponent', () => {
  let component: AssignProductToCountryAndAddPriceComponent;
  let fixture: ComponentFixture<AssignProductToCountryAndAddPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignProductToCountryAndAddPriceComponent]
    });
    fixture = TestBed.createComponent(AssignProductToCountryAndAddPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
