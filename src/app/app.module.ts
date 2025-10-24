import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { WarehouseComponent } from './Components/warehouse/warehouse.component';
import { AddWarehouseComponent } from './Components/add-warehouse/add-warehouse.component';
import { CountriesComponent } from './Components/countries/countries.component';
import { AddCountryComponent } from './Components/add-country/add-country.component';
import { AddWarehouseCategoriesAndProductsComponent } from './Components/add-warehouse-categories-and-products/add-warehouse-categories-and-products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductsComponent } from './Components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    WarehouseComponent,
    AddWarehouseComponent,
    CountriesComponent,
    AddCountryComponent,
    AddWarehouseCategoriesAndProductsComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
