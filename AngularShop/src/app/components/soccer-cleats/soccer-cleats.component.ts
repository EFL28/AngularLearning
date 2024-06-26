import { Component } from '@angular/core';
import { Producto } from '../../producto';

import { ProductService } from '../../services/product-service.service';
import { ShoppingCartService } from '../../services/cart-service.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-soccer-cleats',
  standalone: true,
  imports: [],
  templateUrl: './soccer-cleats.component.html',
  styleUrl: './soccer-cleats.component.css'
})
export class SoccerCleatsComponent {
  //product: Producto | null = null;
  //soccer: Producto = {} as Producto;

  products: Producto[] = [];

  constructor(private productService: ProductService, private cartService: ShoppingCartService, private api:ApiService) {}

  ngOnInit() {
    // this.productService.currentProducts.subscribe((products) => {
    //   this.products = products.filter((product) => product.category === 3);
    // });


    this.api.getProductos().subscribe((data) => {
      data.forEach((product) => {
        if (product.category == 3) {
          this.products.push(product);
        }
      });

      //console.log("Soocer cleats", this.products);
    });
  }

  addToCart(soccer: Producto) {
    this.cartService.addToCart(soccer);
  }

}
