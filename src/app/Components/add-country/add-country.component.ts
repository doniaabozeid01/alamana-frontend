import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Country {
  nameEn: string;
  nameAr: string;
  currencyEn: string;
  currencyAr: string;
  countryCode: string;
}

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent {

  newCountry: Country = {
    nameEn: '',
    nameAr: '',
    currencyEn: '',
    currencyAr: '',
    countryCode: ''
  };

  constructor(private router: Router,private api:ApiService) {}

  saveWarehouse() {
    // // هنا في الواقع هترسل الـ newWarehouse للسيرفر
    // console.log('Saved:', this.newCountry);
    // alert('✅ Warehouse added successfully!');
    
    this.api.CreateCountry(this.newCountry).subscribe({
      next:(response)=>{
        console.log(response);
        
        this.router.navigate(['/dashboard/add-warehouse',response.data]); // يرجع للقائمة أو أي صفحة رئيسية
        
      }
    })

  }

  // cancel() {
  //   this.router.navigate(['/']);
  // }
}
