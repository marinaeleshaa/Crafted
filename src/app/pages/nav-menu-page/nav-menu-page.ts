import { Component } from '@angular/core';
import { Dropdown } from '../../components/ui/dropdown/dropdown';
import { Button } from '../../components/ui/button/button';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../../app/store/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu-page',
  imports: [Dropdown, Button],
  templateUrl: './nav-menu-page.html',
  styleUrl: './nav-menu-page.css',
})
export class NavMenuPage {
  constructor(private store: Store , private router: Router) {}

  logout() {
    this.store.dispatch(AuthActions.LogoutAction());
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500);
  }
}
