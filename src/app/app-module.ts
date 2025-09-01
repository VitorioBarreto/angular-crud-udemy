import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/template/header/header';

import { MatToolbarModule } from '@angular/material/toolbar';
// import { provideAnimations } from '@angular/platform-browser/animations';
import { Footer } from './components/template/footer/footer';
import { Nav } from './components/template/nav/nav';


import  { MatSidenavModule } from '@angular/material/sidenav'
import  { MatCardModule } from '@angular/material/card'
import  { MatListModule } from '@angular/material/list';
import { Home } from './views/home/home'




@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Nav,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule {

 }
