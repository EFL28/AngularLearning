import { Component } from '@angular/core';

@Component({
  selector: 'app-clubs',
  standalone: true,
  imports: [],
  templateUrl: './clubs.component.html',
  styleUrl: './clubs.component.css'
})
export class ClubsComponent {
  clubs = [
    {name: 'Fútbol Club Barcelona', description: 'Escudo F.C Barcelona', image: '../../assets/clubs/Barcelona.png'},
    {name: 'Real Madrid Club de Fútbol', description: 'Escudo Real Madrid', image: '../../assets/clubs/Madrid.png'},
    {name: 'Manchester United Football Club', description: 'Escudo Manchester United', image: '../../assets/clubs/Manchester.png'},
    {name: 'Bayern de Múnich', description: 'Escudo F.C Bayern', image: '../../assets/clubs/Bayern.png'},
  ];

}
