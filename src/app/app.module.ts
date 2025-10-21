import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AddStoreComponent } from './Components/add-store/add-store.component';
import { ViewStoresComponent } from './Components/view-stores/view-stores.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { ViewCategoriesComponent } from './Components/view-categories/view-categories.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AddStoreComponent,
    ViewStoresComponent,
    AddCategoryComponent,
    ViewCategoriesComponent,
    AddProductComponent,
    ViewProductsComponent
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
