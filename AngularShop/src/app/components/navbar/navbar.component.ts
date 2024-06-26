import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  sectionsList = [
    {title: 'Sneakers', type: 'sneakers'}, 
    {title: 'Jerseys', type: 'jerseys'}, 
    {title: 'Soccer Cleats', type: 'soccer-cleats'}
  ];

}

