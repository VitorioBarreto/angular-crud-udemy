import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/template/header/header';

import { MatToolbarModule } from '@angular/material/toolbar';
import { Footer } from './components/template/footer/footer';
import { Nav } from './components/template/nav/nav';


import  { MatSidenavModule } from '@angular/material/sidenav'
import  { MatCardModule } from '@angular/material/card'
import  { MatListModule } from '@angular/material/list';
import { Home } from './views/home/home';
import { ProductCrud } from './views/product-crud/product-crud';
import { ProductCreate } from './components/product/product-create/product-create';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductRead } from './components/product/product-read/product-read';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Nav,
    Home,
    ProductCrud,
    ProductCreate,
    ProductRead
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule {

 }
