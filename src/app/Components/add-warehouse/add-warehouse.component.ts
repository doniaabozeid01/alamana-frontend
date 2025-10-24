// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-add-warehouse',
//   templateUrl: './add-warehouse.component.html',
//   styleUrls: ['./add-warehouse.component.scss']
// })
// export class AddWarehouseComponent {

// }





import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Warehouse {
  id: number;
  name: string;
  location: string;
  // capacity: number;
  countryId: number;
}

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.scss']
})
export class AddWarehouseComponent {

  countries = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Saudi Arabia' },
    { id: 3, name: 'UAE' },
    { id: 4, name: 'Morocco' },
    { id: 5, name: 'Monsora' }
  ];

  newWarehouse = {
    name: '',
    location: '',
    // capacity: 0,
    countryId: 0
  };



  warehouse: Warehouse = { id: 0, name: '', location: '', countryId : 0};

  constructor(private router: Router) {}

  saveWarehouse() {
    // في الحالة الواقعية هيتبعت الـ warehouse دا للسيرفر
    console.log('Saved:', this.warehouse);
    alert('✅ Warehouse added successfully!');
    this.router.navigate(['/add-warehouse-categories-and-products']); // يرجع تاني لصفحة القائمة
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
