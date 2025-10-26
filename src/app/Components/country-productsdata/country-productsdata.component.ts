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
  ) {}
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
        error:(err)=>{
          this.items = [];
        }
      });
  }


}
