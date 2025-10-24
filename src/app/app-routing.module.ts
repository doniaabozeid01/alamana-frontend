import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AddWarehouseComponent } from './Components/add-warehouse/add-warehouse.component';
import { WarehouseComponent } from './Components/warehouse/warehouse.component';
import { CountriesComponent } from './Components/countries/countries.component';
import { AddCountryComponent } from './Components/add-country/add-country.component';
import { AddWarehouseCategoriesAndProductsComponent } from './Components/add-warehouse-categories-and-products/add-warehouse-categories-and-products.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  //  {
  //   path: '',redirectTo:"categories/add",
  //   component: HomeComponent,
  //   children: [
  //     { path: 'stores/add', component: AddStoreComponent },
  //     { path: 'stores/list', component: ViewStoresComponent },

  //     { path: 'categories/add', component: AddCategoryComponent },
  //     { path: 'categories/list', component: ViewCategoriesComponent },

  //     { path: 'products/add', component: AddProductComponent },
  //   ],
  // },
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-country', component: AddCountryComponent },
  { path: 'warehouses', component: WarehouseComponent },
  { path: 'add-warehouse-categories-and-products', component: AddWarehouseCategoriesAndProductsComponent },
  { path: 'add-warehouse', component: AddWarehouseComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'add-product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
