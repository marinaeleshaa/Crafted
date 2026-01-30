import { Component  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Heart, House, ShoppingCart, Store, User, LucideAngularModule, Menu } from 'lucide-angular';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.css',
})
export class MobileNavbar {
 navItems = [
  { label: 'Home', link: '/', icon: House },
  // { label: 'Store', link: '/store', icon: Store },
  { label: 'You', link: '/profile', icon: User },
  { label: 'Cart', link: '/cart', icon: ShoppingCart },
  { label: 'Menu', link: '/menu', icon: Menu },
];

}
