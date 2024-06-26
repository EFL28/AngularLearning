import { Component } from '@angular/core';
import { SalesComponent } from '../sales/sales.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

import { CarouselComponent } from '../carousel/carousel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, SalesComponent, ShoppingCartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides: string[] = [
    '../assets/Just-Do-It.jpg',
    '../assets/camavinga.jpg',
    '../assets/promo2.jpg',
  ];

}
