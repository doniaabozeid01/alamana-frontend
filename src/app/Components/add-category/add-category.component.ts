import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {


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
    this.router.navigate(['/add-product']); // ترجع للقائمة أو أي صفحة رئيسية
  }
}
