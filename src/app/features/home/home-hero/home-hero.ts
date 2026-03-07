import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Button } from '../../../components/ui/button/button';
import { LucideAngularModule } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { SelectUserData } from '../../../store/auth/auth.selectors';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-hero',
  imports: [CommonModule, Button, LucideAngularModule],
  templateUrl: './home-hero.html',
  styleUrl: './home-hero.css',
})
export class HomeHero {
  username = signal<string>('');
  constructor(private store: Store) {
    const destroyRef = inject(DestroyRef);
    this.store
      .select(SelectUserData)
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe((user) => {
        if (user) {
          this.username.set(user.username);
          console.log(this.username());
        } else {
          this.username.set('');
        }
      });
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
