import { Component } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
  category = {
    name: '',
    nameAr: '',
    description: '',
    descriptionAr: '',
    image: ''
  };

  onSubmit() {
    console.log('Category Added:', this.category);
  }

  onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.category.image = input.files[0].name;
  }
}




}
