import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, NavbarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //  quiero hacer un header que tenga un logo, un titulo y un boton que servira para cambiar el estilo de la web (modo light o modo dark)
  title = 'Furbo';
  theme = 'light';
  darkTheme = faMoon;
  lightTheme = faSun;
  // logo = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  // button = 'Change Style';
  // mode = 'light';
  // changeStyle() {
  //   if (this.mode === 'light') {
  //     this.mode = 'dark';
  //   } else {
  //     this.mode = 'light';
  //   }
  // }

  // changeClass() {
  //   this.theme = this.theme === 'light' ? 'dark' : 'light';
  //   //this.headerClass = this.theme === 'light' ? 'light' : 'dark';

  //   //this.themeChange.emit();
  // }

  changeClass() {
    if (this.theme === 'light') {
      this.theme = 'dark';
      document.body.classList.add('dark-theme');
    } else {
      this.theme = 'light';
      document.body.classList.remove('dark-theme');
    }
  }


}
