import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Warehouse {
  id: number;
  name: string;
  location: string;
  countryId: number;
}

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent {
  countryId: number = 0;

  constructor(private router: Router, private api: ApiService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.countryId = Number(this.activatedroute.snapshot.paramMap.get('countryId'));
    this.getAllWarehouses();

  }
  warehouses: Warehouse[] = [];

  editId: number | null = null;
  editedWarehouse: Warehouse = { id: 0, name: '', location: '', countryId: 0 };

  startEdit(warehouse: Warehouse) {
    this.editId = warehouse.id;
    this.editedWarehouse = { ...warehouse };
  }

  saveEdit(id: number) {

    this.editedWarehouse.countryId = this.countryId;
    this.api.UpdateWarehouse(id, this.editedWarehouse).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllWarehouses()

        this.cancelEdit();
      }
    })


  }

  cancelEdit() {
    this.editId = null;
    this.editedWarehouse = { id: 0, name: '', location: '', countryId: 0 };
  }

  deleteWarehouse(id: number) {

    this.api.DeleteWarehouse(id).subscribe({
      next: (response) => {
        console.log(response);
        this.getAllWarehouses();
      }
    })
  }

  addWarehouse() {
    this.router.navigate(['add-warehouse', this.countryId]);
  }



  getAllWarehouses() {
    this.api.warehousesByCountry(this.countryId).subscribe({
      next: (response) => {
        console.log(response);
        this.warehouses = response.data.warehouses;
      },
      error: (err) => {
        if (err.error.status) {
          this.warehouses = [];
        }
      }
    })
  }


  getCategories(id: number) {
    this.router.navigate(['category-assignmnt', id])
  }



}
