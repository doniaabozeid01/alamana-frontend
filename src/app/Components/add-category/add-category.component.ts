import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

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

  constructor(private router: Router, private api: ApiService) { }

  saveItem() {
    console.log('Saved:', this.newItem);
    // alert('✅ Item saved successfully!');
    this.api.CreateCategory(this.newItem).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/add-product']);
      },
      error:(err)=>{
        this.router.navigate(['/add-category']);
        
      }
    })
  }
}
