import { Component } from '@angular/core';
import { Producto } from '../../producto';

import { ProductService } from '../../services/product-service.service';
import { ShoppingCartService } from '../../services/cart-service.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-jerseys',
  standalone: true,
  imports: [],
  templateUrl: './jerseys.component.html',
  styleUrl: './jerseys.component.css',
})
export class JerseysComponent {
  //product: Producto | null = null;

  products: Producto[] = [];

  constructor(private productService: ProductService, private cartService: ShoppingCartService, private api:ApiService) {}

  ngOnInit() {
    // this.productService.currentProducts.subscribe((products) => {
    //   this.products = products.filter((product) => product.category === 2); // 2 es el valor de la categoría para los jerseys
    // });

    this.api.getProductos().subscribe((data) => {
      data.forEach((product) => {
        if (product.category == 2) {
          this.products.push(product);
        }
      });

      //console.log("Jerseys", this.products);
    });
  }

  addToCart(jersey: Producto) {
    this.cartService.addToCart(jersey);
  }
}
