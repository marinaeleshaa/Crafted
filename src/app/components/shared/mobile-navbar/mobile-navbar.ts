import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Heart, House, ShoppingCart, User, LucideAngularModule, Menu } from 'lucide-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectIsAuthenticated } from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-mobile-navbar',
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './mobile-navbar.html',
  styleUrl: './mobile-navbar.css',
})
export class MobileNavbar implements OnInit {
  constructor(private store: Store) {}
  isAuthenticated!: boolean;

  ngOnInit(): void {
    this.store.select(SelectIsAuthenticated).subscribe((auth) => {
      this.isAuthenticated = auth;
      this.updateNavItems();
    });
  }

  navItems = [
    { label: 'Home', link: '/', icon: House },
    { label: 'You', link: this.isAuthenticated ? '/navMenu' : '/login', icon: User },
    { label: 'Cart', link: '/cart', icon: ShoppingCart },
    { label: 'Fav', link: '/favorites', icon: Heart },
  ];

  updateNavItems() {
    this.navItems = [
      { label: 'Home', link: '/', icon: House },
      { label: 'You', link: this.isAuthenticated ? '/navMenu' : '/login', icon: User },
      { label: 'Cart', link: '/cart', icon: ShoppingCart },
      { label: 'Fav', link: '/favorites', icon: Heart },
    ];
  }
}
