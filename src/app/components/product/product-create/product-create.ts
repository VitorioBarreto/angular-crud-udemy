import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.html',
  styleUrl: './product-create.css'
})
export class ProductCreate {

  product: Product = {
    name: 'Produto X',
    price: 118.99
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
  this.productService.create(this.product).subscribe(() => {
    this.productService.showMessage('Produto criado!');
    this.router.navigate(['/products']);
  });


  }

   cancel(): void {
  //   this.router.navigate(['/products']);
  //   this.productService.showMessage('Operação cancelada!');
 }
}
