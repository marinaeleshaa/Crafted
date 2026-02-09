import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Button } from '../../../components/ui/button/button';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { SelectUserData } from '../../../store/auth/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-hero',
  imports: [CommonModule, Button, LucideAngularModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero implements OnInit {
  userData$!: Observable<{ username: string; password: string } | undefined>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userData$ = this.store.select(SelectUserData);
  }
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
