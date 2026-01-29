import { Component } from '@angular/core';
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
import { Dropdown } from "../../ui/dropdown/dropdown";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ModeToggle, LucideAngularModule, Button, Dropdown],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  // mobileMenuOpen = false;
  readonly icon = TextAlignJustify;
  readonly filterIcon = ListFilter;
  readonly Heart = Heart;
  readonly Cart = ShoppingCartIcon;
  readonly User = User;
  dropdownOpen = false;
  profileMenuOpen = false;

  // toggleMobileMenu() {
  //   this.mobileMenuOpen = !this.mobileMenuOpen;
  // }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {

    setTimeout(() => {
    this.profileMenuOpen = false;
    this.dropdownOpen = false;
  }, 200);
  }

  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen;
  }
}
