import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  sections = [
    { title: 'Vigila el rendimiento de tu equipo favorito', content: 'Valor 1', type: 'clubs' },
    { title: 'Compara a las mejores plantillas por país', content: 'Valor 2', type: 'national-team' },
    { title: 'Revive los partidos mas memorables de tus competiciones favoritas', content: 'Valor 3', type: 'games' }
  ];
}