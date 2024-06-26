import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, SectionComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() themeChange = new EventEmitter<string>();
  theme = 'light';
  darkTheme = faMoon;
  lightTheme = faSun;
  headerClass='default-header';
  title: string = 'Furbo';

  changeClass() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.headerClass = this.theme === 'light' ? 'light' : 'dark';

    this.themeChange.emit();
  }
}