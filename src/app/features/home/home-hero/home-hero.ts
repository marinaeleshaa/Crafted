import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  imports: [CommonModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero {
  activeIndex = 0;
  Images = [
    { src: '/hero/shirt.jpg', alt: 'shirt image' },
    { src: '/hero/mug.jpg', alt: 'mug image' },
    { src: '/hero/phone.jpg', alt: 'phone cover image' },
  ];

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
