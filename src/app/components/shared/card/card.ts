import { Component, input } from '@angular/core';
import { Heart, LucideAngularModule, ShoppingCart } from 'lucide-angular';
import { Button } from '../../ui/button/button';

@Component({
  selector: 'app-card',
  imports: [LucideAngularModule, Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // ? Icons
  readonly cartIcon = ShoppingCart;
  readonly heartIcon = Heart;

  // ? inputs
  image = input<string>('');
  title = input<string>('title');
  subtitle = input<string>('subtitle');
  description = input<string>(
    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue. Donec vel sapien augue.',
  );
  price = input<string>('$100');
}
