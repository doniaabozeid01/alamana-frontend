import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

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
    categoryId: 0

  };


  categoryId: number = 0;

  constructor(private router: Router, private api: ApiService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(){
        this.categoryId = Number(this.activatedRoute.snapshot.paramMap.get('categoryId'));

  }
  saveItem() {
    // console.log('Saved:', this.newItem);
    // alert('✅ Item saved successfully!');

    this.newItem.categoryId = this.categoryId;
    this.api.CreateProduct(this.newItem).subscribe({
      next: (response) => {
        console.log(response);
        this.newItem = {
          nameEn: '',
          nameAr: '',
          descriptionEn: '',
          descriptionAr: '',
          categoryId: 0
        };

        // this.router.navigate(['/add-product']); // ترجع للقائمة أو أي صفحة رئيسية


      }
    })

    // this.router.navigate(['/add-product']); // ترجع للقائمة أو أي صفحة رئيسية
  }

  done() {
    this.router.navigate(['/dashboard/categories'])
  }
}
