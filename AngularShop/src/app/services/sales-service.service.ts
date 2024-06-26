import { Injectable } from '@angular/core';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  sales: Producto[] = [];

  constructor() { }

  addSale(product: Producto) {
    this.sales.push(product);
  }
}