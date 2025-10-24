import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Warehouse {
  id: number;
  name: string;
  location: string;
  capacity: number;
}

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {

  constructor(private router:Router){}

  warehouses: Warehouse[] = [
    { id: 1, name: 'Main Store', location: 'Cairo', capacity: 500 },
    { id: 2, name: 'Backup Store', location: 'Alexandria', capacity: 300 }
  ];

  editId: number | null = null;
  editedWarehouse: Warehouse = { id: 0, name: '', location: '', capacity: 0 };

  startEdit(warehouse: Warehouse) {
    this.editId = warehouse.id;
    this.editedWarehouse = { ...warehouse };
  }

  saveEdit(id: number) {
    const index = this.warehouses.findIndex(w => w.id === id);
    if (index !== -1) {
      this.warehouses[index] = { ...this.editedWarehouse };
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editId = null;
    this.editedWarehouse = { id: 0, name: '', location: '', capacity: 0 };
  }

  deleteWarehouse(id: number) {
    this.warehouses = this.warehouses.filter(w => w.id !== id);
  }

  addWarehouse() {
    // const newId = this.warehouses.length ? Math.max(...this.warehouses.map(w => w.id)) + 1 : 1;
    // const newWarehouse: Warehouse = {
    //   id: newId,
    //   name: 'New Warehouse',
    //   location: 'Enter location',
    //   capacity: 0
    // };
    // this.warehouses.push(newWarehouse);
    // this.startEdit(newWarehouse);

    this.router.navigate(['add-warehouse'])
  }
}
