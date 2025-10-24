import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  newItem = {
    nameEn: '',
    nameAr: '',
    descriptionEn: '',
    descriptionAr: '',
  };

  constructor(private router: Router) {}

  saveItem() {
    console.log('Saved:', this.newItem);
    alert('✅ Item saved successfully!');

    this.newItem = {
      nameEn: '',
      nameAr: '',
      descriptionEn: '',
      descriptionAr: '',
    };

    this.router.navigate(['/add-product']); // ترجع للقائمة أو أي صفحة رئيسية
  }

  done(){
    this.router.navigate(['/categories'])
  }
}
