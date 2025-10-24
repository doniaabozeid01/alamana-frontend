import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Country {
  id: number;
  nameEn: string;
  nameAr: string;
  currencyEn: string;
  currencyAr: string;
  countryCode: string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

  constructor(private router:Router){}
  countries: Country[] = [
    { id: 1, nameEn: 'Egypt', nameAr: 'مصر', currencyEn: 'EGP', currencyAr: 'جنيه', countryCode: 'EG' },
    { id: 2, nameEn: 'Saudi Arabia', nameAr: 'السعودية', currencyEn: 'SAR', currencyAr: 'ريال', countryCode: 'SA' }
  ];

  newCountry: Country = { id: 0, nameEn: '', nameAr: '', currencyEn: 'USD', currencyAr: 'USD', countryCode: '' };
  editMode = false;
  editId: number | null = null;

  editCountry(country: Country) {
    this.editMode = true;
    this.editId = country.id;
    this.newCountry = { ...country };
  }

  updateCountry() {
    const index = this.countries.findIndex(c => c.id === this.editId);
    if (index !== -1) {
      this.countries[index] = { ...this.newCountry };
      this.cancelEdit();
    }
  }

  cancelEdit() {
    this.editMode = false;
    this.editId = null;
    this.newCountry = { id: 0, nameEn: '', nameAr: '', currencyEn: 'USD', currencyAr: 'USD', countryCode: '' };
  }

  deleteCountry(id: number) {
    this.countries = this.countries.filter(c => c.id !== id);
  }

    viewWarehouses(id: number) {
    this.router.navigate(['warehouses'])
  }
}
