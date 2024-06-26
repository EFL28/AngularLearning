import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSun,
  faMoon,
  faMagnifyingGlass,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Producto } from '../../producto';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NavbarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private api: ApiService, private router:Router) {}

  title = 'Nike';
  theme = 'light';
  darkTheme = faMoon;
  lightTheme = faSun;
  searchIcon = faMagnifyingGlass;
  cart = faBagShopping;
  products: Producto[] = [];
  searchResults: Producto[] = [];
  selectedProduct: Producto = {
    reference: 0,
    name: '',
    description: '',
    price: 0,
    category: 0,
    stock: 0,
    sale: false,
    imageURL: '',
  };

  selectProduct(product: Producto) {
    this.selectedProduct = product;
    console.log(this.selectedProduct.id);
  }

  ngOnInit() {
    this.api.getProductos().subscribe((data) => {
      this.products = data;
    });
    console.log(this.products);
  }

  changeClass() {
    if (this.theme === 'light') {
      this.theme = 'dark';
      document.body.classList.add('dark-theme');
    } else {
      this.theme = 'light';
      document.body.classList.remove('dark-theme');
    }
  }

  onSearch(event: any) {
    // console.log(event.target.value);
    let query = event.target.value.toLowerCase();
    this.searchResults = this.products.filter((product) => {
      return product.name.toLowerCase().includes(query) || product.reference.toString().includes(query);
    });
    console.log(this.searchResults);
  }

  deleteProduct(product: Producto) {
    if (product.id !== undefined) {
      this.api.deleteProducto(product.id).subscribe();
    } else {
      console.error('Product ID is undefined');
    }
  }
}
