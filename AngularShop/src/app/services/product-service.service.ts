import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productSource = new BehaviorSubject<Producto[]>([]);
  currentProducts = this.productSource.asObservable();
  
  constructor() {}

  addProduct(product: Producto) {
    const currentProducts = this.productSource.getValue();
    this.productSource.next([...currentProducts, product]);
  }
}
