import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {match: 'Holanda vs España', date: '11 de julio de 2010', stadium: 'Estadio Soccer City', image: '../../assets/NEDvsESP.png'},
    {match: 'Manchester United vs Bayern de Múnich', date: '26 de mayo de 1999', stadium: 'Camp Nou', image: '../../assets/MUvsFCB.png'},
    {match: 'Fútbol Club Barcelona vs Paris Saint-Germain', date: '	8 de marzo de 2017', stadium: 'Camp Nou', image: '../../assets/FCBvsPSG.png'},
    {match: 'Brasil vs Alemania', date: '8 de julio de 2014', stadium: 'Estadio Mineirão', image: '../../assets/BRvsGER.png'},
  ];

}
