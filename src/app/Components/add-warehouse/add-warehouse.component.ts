import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

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

  countryId: number = 0;
  newWarehouse = {
    name: '',
    location: '',
    countryId: 0
  };

  ngOnInit() {
    this.countryId = Number(this.activatedroute.snapshot.paramMap.get('countryId'));
  }

  // warehouse: Warehouse = { id: 0, name: '', location: '', countryId: 0 };

  constructor(private router: Router, private api: ApiService, private activatedroute: ActivatedRoute) { }

  saveWarehouse() {
    this.newWarehouse.countryId = this.countryId;
    this.api.CreateWarehouse(this.newWarehouse).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigate(['/dashboard/add-warehouse-categories-and-products',response.data]); // يرجع تاني لصفحة القائمة

      }
    }
    )
  }

  cancel() {
    this.router.navigate(['/dashboard/warehouses',this.countryId]);
  }
}
