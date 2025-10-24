import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Country {
  name: string;
  nameArabic: string;
  currency: string;
  currencyArabic: string;
  code: string;
}

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent {

  newCountry: Country = {
    name: '',
    nameArabic: '',
    currency: '',
    currencyArabic: '',
    code: ''
  };

  constructor(private router: Router) {}

  saveWarehouse() {
    // هنا في الواقع هترسل الـ newWarehouse للسيرفر
    console.log('Saved:', this.newCountry);
    alert('✅ Warehouse added successfully!');
    this.router.navigate(['/add-warehouse']); // يرجع للقائمة أو أي صفحة رئيسية
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
