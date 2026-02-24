import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModeToggle } from '../mode-toggle/mode-toggle';
import {
  LucideAngularModule,
  TextAlignJustify,
  ListFilter,
  Heart,
  ShoppingCartIcon,
  User,
} from 'lucide-angular';
import { Button } from '../../ui/button/button';
import { Dropdown } from '../../ui/dropdown/dropdown';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectIsAuthenticated } from '../../../store/auth/auth.selectors';
import * as AuthActions from '../../../store/auth/auth.actions';
import { SearchInput } from '../search-input/search-input';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ModeToggle,
    LucideAngularModule,
    Button,
    Dropdown,
    SearchInput,
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  // mobileMenuOpen = false;
  readonly Heart = Heart;
  readonly Cart = ShoppingCartIcon;
  readonly User = User;
  profileMenuOpen = false;
  isAuthenticated$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(SelectIsAuthenticated);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // ? Close dropdowns if clicked outside
    if (!target.closest('.dropdown-wrapper')) {
      this.profileMenuOpen = false;
    }
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  closeProfileMenu() {
    this.profileMenuOpen = false;
  }

  logout() {
    this.store.dispatch(AuthActions.LogoutAction());
  }
}
