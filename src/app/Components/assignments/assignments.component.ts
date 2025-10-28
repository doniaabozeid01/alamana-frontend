import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Country {
  id: number;
  nameEn: string;
  nameAr: string;
  currencyEn: string;
  currencyAr: string;
  countryCode: string;
}
@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss'],
})
export class AssignmentsComponent {
  constructor(private router: Router, private api: ApiService) {}
  countries: Country[] = [];

  newCountry: Country = {
    id: 0,
    nameEn: '',
    nameAr: '',
    currencyEn: '',
    currencyAr: '',
    countryCode: '',
  };
  editMode = false;
  editId: number | null = null;

  ngOnInit() {
    this.getAllCountries();
  }

  assignProduct(id: number) {
    this.router.navigate(['/dashboard/assign-product-to-country-and-add-price', id]);
  }

  ProductData(id: number) {
    this.router.navigate(['/dashboard/country-products-data', id]);
  }

  getAllCountries() {
    this.api.getAllCountries().subscribe({
      next: (response) => {
        console.log(response);
        this.countries = response.data.items;
      },
      error: (err) => {
        if (err.error.status) {
          this.countries = [];
        }
      },
    });
  }
}
