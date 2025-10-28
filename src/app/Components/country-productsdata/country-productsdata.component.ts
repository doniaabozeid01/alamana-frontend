import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';

interface Item {
  id: number;
  productId: number;
  nameEn: string;
  nameAr: string;
  price: number;
  currencyEn: string;
  currencyAr: string;
}
@Component({
  selector: 'app-country-productsdata',
  templateUrl: './country-productsdata.component.html',
  styleUrls: ['./country-productsdata.component.scss'],
})
export class CountryProductsdataComponent {
  constructor(
    private router: Router,
    private api: ApiService,
    private activatedroute: ActivatedRoute
  ) { }
  items: Item[] = [];
  countryId: number = 0;
  editMode = false;
  editId: number | null = null;
  newItem: Item = {
    id: 0,
    productId: 0,
    nameEn: '',
    nameAr: '',
    price: 0,
    currencyEn: '',
    currencyAr: '',
    // countryCode: '',
  };

  ngOnInit() {
    this.countryId = Number(
      this.activatedroute.snapshot.paramMap.get('countryId')
    );

    this.GetProductsByCountryId();
  }

  deleteItem(id: number) {
    this.api.DeleteProductCountryPrice(id).subscribe({
      next: (response) => {
        console.log(response);
        this.GetProductsByCountryId();
      },
    });
  }

  GetProductsByCountryId() {
    this.api
      .GetProductsByCountryIdAsync(
        this.countryId
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.items = response.data;
        },
        error: (err) => {
          this.items = [];
        }
      });
  }




  //   editItem(item: Item) {
  //   this.editMode = true;
  //   this.editId = item.id;
  //   this.newItem = { ...item };
  // }

  // cancelEdit() {
  //   this.editMode = false;
  //   this.editId = null;
  //   this.newItem = { id: 0, productId: 0, nameEn: '', nameAr: '', price: 0, currencyEn: '', currencyAr:'' };
  // }

  // updateItem() {
  //   this.api.UpdateProductCountryPrice(this.newItem.id, this.newItem).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.cancelEdit();
  //       this.GetProductsByCountryId()
  //     }
  //   })
  // }






  newPrice: number | null = null;

  editItem(item: Item) {
    this.editMode = true;
    this.editId = item.id;
    this.newPrice = item.price;              // هنعدّل السعر بس
  }

  cancelEdit() {
    this.editMode = false;
    this.editId = null;
    this.newPrice = null;
  }

  updateItem(item: Item) {
    if (this.newPrice == null || this.newPrice === item.price) { return; }

    // لو الـ API عندك يأخذ Body كامل:
    const payload: Item = { ...item, price: this.newPrice };

    const data = {

      "id": item.id,
      "productId": item.productId,
      "countryId": this.countryId,
      "amount": this.newPrice
    }

    console.log(data);
    

    this.api.UpdateProductCountryPrice(item.id, data).subscribe({
      next: () => {
        this.cancelEdit();
        this.GetProductsByCountryId();
      }
    });
  }


}
