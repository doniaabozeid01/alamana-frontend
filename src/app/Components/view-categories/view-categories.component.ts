import { Component } from '@angular/core';

interface Category {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
}

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Green Tea',
      nameAr: 'شاي أخضر',
      description: 'Fresh and healthy green tea.',
      descriptionAr: 'شاي أخضر طازج وصحي.',
      image: 'assets/images/green-tea.jpg'
    },
    {
      id: 2,
      name: 'Black Tea',
      nameAr: 'شاي أسود',
      description: 'Strong and classic black tea.',
      descriptionAr: 'شاي أسود تقليدي وقوي.',
      image: 'assets/images/black-tea.jpg'
    }
  ];

  editCategory: Category | null = null;

  onEdit(category: Category) {
    this.editCategory = { ...category };
  }

  onSave() {
    if (this.editCategory) {
      const index = this.categories.findIndex(c => c.id === this.editCategory!.id);
      this.categories[index] = this.editCategory;
      this.editCategory = null;
    }
  }

  onCancel() {
    this.editCategory = null;
  }

  onDelete(id: number) {
    this.categories = this.categories.filter(c => c.id !== id);
  }
}
