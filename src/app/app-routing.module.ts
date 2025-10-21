import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AddStoreComponent } from './Components/add-store/add-store.component';
import { ViewStoresComponent } from './Components/view-stores/view-stores.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { ViewCategoriesComponent } from './Components/view-categories/view-categories.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ViewProductsComponent } from './Components/view-products/view-products.component';

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
  //     { path: 'products/list', component: ViewProductsComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
