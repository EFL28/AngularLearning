import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { ApiService } from './services/api.service';
import { Producto } from './producto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private api: ApiService) {}
  products: Producto[] = [];

  ngOnInit(): void {
    initFlowbite();
    this.api.getProductos().subscribe((data) => {
      this.products = data;
    });
    console.log(this.products);
  }
}
