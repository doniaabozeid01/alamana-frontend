import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Item {
  id: number;
  nameEn: string;
  nameAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  // isActive: boolean;
  slug?: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  constructor(private router:Router){}
  items: Item[] = [
    { id: 1, nameEn: 'Item 1', nameAr: 'عنصر 1', descriptionEn: 'Desc 1', descriptionAr: 'الوصف 1', slug: 'item-1' },
    { id: 2, nameEn: 'Item 2', nameAr: 'عنصر 2', descriptionEn: 'Desc 2', descriptionAr: 'الوصف 2', slug: 'item-2' }
  ];

  editMode = false;
  editId: number | null = null;
  newItem: Item = { id: 0, nameEn: '', nameAr: '', descriptionEn: '', descriptionAr: '',  slug: '' };

  editItem(item: Item) {
    this.editMode = true;
    this.editId = item.id;
    this.newItem = { ...item };
  }

  cancelEdit() {
    this.editMode = false;
    this.editId = null;
    this.newItem = { id: 0, nameEn: '', nameAr: '', descriptionEn: '', descriptionAr: '', slug: '' };
  }

  updateItem() {
    const index = this.items.findIndex(i => i.id === this.editId);
    if (index > -1) {
      this.items[index] = { ...this.newItem };
      this.cancelEdit();
      alert('✅ Item updated successfully!');
    }
  }

  deleteItem(id: number) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.items = this.items.filter(i => i.id !== id);
      alert('✅ Item deleted successfully!');
    }
  }


  getProducts(category:any){
    this.router.navigate(['/products'])
  }
}

