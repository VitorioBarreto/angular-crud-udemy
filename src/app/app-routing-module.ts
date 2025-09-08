import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './views/home/home';
import { ProductCrud } from './views/product-crud/product-crud'; // Adjust the path if necessary
import { ProductCreate } from './components/product/product-create/product-create';

const routes: Routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "products",
    component: ProductCrud
  },
  {
    path: "products/create",
    component: ProductCreate
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
