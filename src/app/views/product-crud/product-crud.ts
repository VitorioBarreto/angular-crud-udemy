import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  standalone: false,
  templateUrl: './product-crud.html',
  styleUrl: './product-crud.css'
})
export class ProductCrud {

  constructor(private router: Router) {}

  navigateToProductCreate() {
    this.router.navigate(['/products/create']);
  }
}
