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
import { HttpClientModule } from '@angular/common/http';
import { WarehouseCategoryAssignComponent } from './Components/warehouse-category-assign/warehouse-category-assign.component';
import { AssignNewCaetgoryToWarehouseComponent } from './Components/assign-new-caetgory-to-warehouse/assign-new-caetgory-to-warehouse.component';
import { ProductCategoryWarehouseCountryComponent } from './Components/product-category-warehouse-country/product-category-warehouse-country.component';
import { AssignNewProductToWarehouseComponent } from './Components/assign-new-product-to-warehouse/assign-new-product-to-warehouse.component';
import { AssignmentsComponent } from './Components/assignments/assignments.component';
import { AssignProductToCountryAndAddPriceComponent } from './Components/assign-product-to-country-and-add-price/assign-product-to-country-and-add-price.component';
import { CountryProductsdataComponent } from './Components/country-productsdata/country-productsdata.component';
import { LoginComponent } from './Components/login/login.component';
import { SplashComponent } from './Components/splash/splash.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

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
    ProductsComponent,
    WarehouseCategoryAssignComponent,
    AssignNewCaetgoryToWarehouseComponent,
    ProductCategoryWarehouseCountryComponent,
    AssignNewProductToWarehouseComponent,
    AssignmentsComponent,
    AssignProductToCountryAndAddPriceComponent,
    CountryProductsdataComponent,
    LoginComponent,
    SplashComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
