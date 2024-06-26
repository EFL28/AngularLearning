import { Component } from '@angular/core';

@Component({
  selector: 'app-national-teams',
  standalone: true,
  imports: [],
  templateUrl: './national-teams.component.html',
  styleUrl: './national-teams.component.css'
})
export class NationalTeamsComponent {
  nationalTeams = [
    {name: 'Selección de España', description: 'Selección de España', image: '../../assets/España.png'},
    {name: 'Selección de Inglaterra', description: 'Selección de Inglaterra', image: '../../assets/Inglaterra.png'},
    {name: 'Selección de Brasil', description: 'Selección de Brasil', image: '../../assets/Brasil.png'},
    {name: 'Selección de Alemania', description: 'Selección de Alemania', image: '../../assets/Alemania.png'},
  ];

}
