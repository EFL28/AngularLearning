import { Component, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../producto';

import { ProductService } from '../../services/product-service.service';
import { SalesService } from '../../services/sales-service.service';
import { ShoppingCartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export class SalesComponent {
  product: Producto | null = null;

  products: Producto[] = [];

  addToCart(product: Producto) {
    this.cartService.addToCart(product);
  }


  constructor(private productService: ProductService, private salesService: SalesService, private cartService:ShoppingCartService) {}

  ngOnInit() {
    this.productService.currentProducts.subscribe((products) => {
      this.products = products.filter((product) => (product.sale = true));
    });

    this.sales.push(...this.salesService.sales);
  }

  sales: Producto[] = [
    {
      reference: 0o1,
      name: 'FC Barcelona Segunda Equipación 20-21',
      description: 'Segunda equipación del F.C Barcelona',
      price: 99,
      category: 3,
      stock: 100,
      sale: true,
      imageURL: 'https://camisgo.com/wp-content/uploads/2023/05/barca2a20.jpg',
    },
    {
      reference: 2,
      name: 'Boston Celtics Showtime City Edition',
      description:
        'Chaqueta de manga larga con cremallera completa Nike Dri-FIT - Hombre',
      price: 144.99,
      category: 2,
      stock: 200,
      sale: true,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cb67140-0dd0-44d1-a0ea-7d8013375633/boston-celtics-showtime-city-edition-chaqueta-de-manga-larga-con-cremallera-completa-dri-fit-c05svl.png',
    },
    {
      reference: 3,
      name: 'Nike Air Max 97',
      description: 'Zapatillas - Mujer',
      price: 94.99,
      category: 1,
      stock: 300,
      sale: true,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cbc21e7-886a-4265-80a1-2494e30daf51/air-max-97-zapatillas-frVmb5.png',
    },
    {
      reference: 4,
      name: 'Nike Sportswear Phoenix Fleece',
      description: 'Jogger oversize de talle alto - Mujer',
      price: 59.99,
      category: 1,
      stock: 100,
      sale: true,
      imageURL:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dc885963-17a2-4eb0-9b61-d7578d52adcb/sportswear-phoenix-fleece-jogger-oversize-de-talle-alto-ZBCgJm.png',
    },
  ];
}
