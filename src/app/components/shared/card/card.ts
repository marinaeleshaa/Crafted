import { Component } from '@angular/core';
import { LucideAngularModule, ShoppingCart } from "lucide-angular";
import { Button } from "../../ui/button/button";

@Component({
  selector: 'app-card',
  imports: [LucideAngularModule, Button],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  readonly cartIcon = ShoppingCart;
}
