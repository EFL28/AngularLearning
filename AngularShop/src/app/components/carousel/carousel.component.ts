import { Component } from '@angular/core';
import { Input, OnInit, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() slides: string[] = [];
  currentSlideIndex: number = 0;
  intervalId: any;

  leftArrow = faArrowLeft;
  rightArrow = faArrowRight;

  // ngOnInit() {
  //   this.startCarousel();
  // }

  // ngOnDestroy() {
  //   this.stopCarousel();
  // }

  // startCarousel() {
  //   this.intervalId = setInterval(() => {
  //     this.nextSlide();
  //   }, 300); // Cambia aquí el intervalo a 5000ms (5 segundos)
  // }

  // stopCarousel() {
  //   clearInterval(this.intervalId);
  // }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}