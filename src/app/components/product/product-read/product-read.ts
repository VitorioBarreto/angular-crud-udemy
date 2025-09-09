import { ProductService } from '../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  standalone: false,
  templateUrl: './product-read.html',
  styleUrl: './product-read.css'
})
export class ProductRead implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products);
    });
  }

}
