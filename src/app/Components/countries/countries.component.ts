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
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {

  constructor(private router: Router, private api: ApiService) { }
  countries: Country[] = [];

  newCountry: Country = { id: 0, nameEn: '', nameAr: '', currencyEn: '', currencyAr: '', countryCode: '' };
  editMode = false;
  editId: number | null = null;


  ngOnInit() {
    this.getAllCountries();
  }
  editCountry(country: Country) {
    this.editMode = true;
    this.editId = country.id;
    this.newCountry = { ...country };
  }

  updateCountry() {
    // const index = this.countries.findIndex(c => c.id === this.editId);
    // if (index !== -1) {
    //   this.countries[index] = { ...this.newCountry };
    //   this.cancelEdit();
    // }


    this.api.UpdateCountry(this.newCountry.id, this.newCountry).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllCountries()

        this.cancelEdit();
      }
    })




  }

  cancelEdit() {
    this.editMode = false;
    this.editId = null;
    this.newCountry = { id: 0, nameEn: '', nameAr: '', currencyEn: 'USD', currencyAr: 'USD', countryCode: '' };
  }

  deleteCountry(id: number) {
    this.api.DeleteCountry(id).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllCountries();
      }
    })
  }

  viewWarehouses(id: number) {
    this.router.navigate(['/dashboard/warehouses', id]);
  }



  getAllCountries() {
    this.api.getAllCountries().subscribe({
      next: (response) => {
        console.log(response);
        this.countries = response.data.items;
      }, error: (err) => {
        if (err.error.status) {
          this.countries = [];
        }
      }
    })
  }

}
