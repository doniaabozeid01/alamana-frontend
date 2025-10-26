import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryProductsdataComponent } from './country-productsdata.component';

describe('CountryProductsdataComponent', () => {
  let component: CountryProductsdataComponent;
  let fixture: ComponentFixture<CountryProductsdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryProductsdataComponent]
    });
    fixture = TestBed.createComponent(CountryProductsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
