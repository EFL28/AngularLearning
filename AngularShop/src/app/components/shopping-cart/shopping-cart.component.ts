import { Component } from '@angular/core';

import { ShoppingCartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cart: any[] = [];

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

}
