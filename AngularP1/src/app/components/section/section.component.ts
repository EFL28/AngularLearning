import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  sectionsList = [
    {title: 'Clubes', type: 'clubs'}, 
    {title: 'Selecciones', type: 'national-team'}, 
    {title: 'Partidos', type: 'games'}
  ];

}
