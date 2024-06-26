import { Component } from '@angular/core';
import { Producto } from '../../producto';

import { ProductService } from '../../services/product-service.service';
import { ShoppingCartService } from '../../services/cart-service.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sneakers',
  standalone: true,
  imports: [],
  templateUrl: './sneakers.component.html',
  styleUrl: './sneakers.component.css'
})
export class SneakersComponent {
  products: any[] = [];
  //product: Producto = {} as Producto;

  constructor(private productService: ProductService, private cartService: ShoppingCartService, private api:ApiService) {}

  ngOnInit() {
    // this.productService.currentProducts.subscribe((products) => {
    //   this.products = products.filter((product) => product.category === 1);
    // });

    this.api.getProductos().subscribe((data) => {
      data.forEach((product) => {
        if (product.category == 1) {
          this.products.push(product);
        }
      });

      //console.log("Sneakers", this.products);
    });
    
  }

  addToCart(sneaker: Producto) {
    this.cartService.addToCart(sneaker);
  }

}
