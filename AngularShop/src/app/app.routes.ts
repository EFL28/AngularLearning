import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SneakersComponent } from './components/sneakers/sneakers.component';
import { AdminComponent } from './components/admin/admin.component';
import { JerseysComponent } from './components/jerseys/jerseys.component';
import { SoccerCleatsComponent } from './components/soccer-cleats/soccer-cleats.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sneakers', component: SneakersComponent },
    { path: 'jerseys', component: JerseysComponent },
    { path: 'soccer-cleats', component: SoccerCleatsComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'cart', component: ShoppingCartComponent },
];
