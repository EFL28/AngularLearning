// shopping-cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart:any = [];
  private cartObservable = new BehaviorSubject([]);



  constructor() { }

  getCart() {
    return this.cartObservable.asObservable();
  }

  addToCart(product: Producto) {
    this.cart.push(product);
    this.cartObservable.next(this.cart);
  }
}