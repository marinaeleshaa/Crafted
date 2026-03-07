
import { Component, computed, signal, effect, DestroyRef, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input } from '../../../components/ui/input/input';
import { Button } from '../../../components/ui/button/button';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import * as AuthActions from '../../../store/auth/auth.actions';
import {
  SelectAuthError,
  SelectAuthLoading,
  SelectIsAuthenticated,
} from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, Input, Button, RouterLink],
  templateUrl: './login-form.html',
})
export class LoginComponent implements OnDestroy {
  // Form fields
  email = signal<string>('');
  password = signal<string>('');

  // Form state
  isLoading = signal(false);
  formError = signal('');
  successMessage = signal('');
  emailTouched = signal(false);
  passwordTouched = signal(false);

  constructor(
    private store: Store,
    private router: Router,
  ) {
    const destroyRef = inject(DestroyRef);

    this.store
      .select(SelectAuthLoading)
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe((loading) => this.isLoading.set(loading ?? false));

    this.store
      .select(SelectAuthError)
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe((error) => {
        this.formError.set(error || '');
        if (error) this.successMessage.set('');
      });

    this.store
      .select(SelectIsAuthenticated)
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe((isAuth) => {
        if (isAuth) this.router.navigate(['/']);
      });
  }

  /**
   * Empty field → only show "required" after blur (touched).
   * Has value → validate immediately, no touch gate.
   */
  emailError = computed(() => {
    if (this.email().length === 0) {
      return this.emailTouched() ? 'Email is required' : '';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())) {
      return 'Please enter a valid email address';
    }
    return '';
  });

  passwordError = computed(() => {
    if (this.password().length === 0) {
      return this.passwordTouched() ? 'Password is required' : '';
    }
    if (this.password().length < 6) return 'Password must be at least 6 characters';
    return '';
  });

  /**
   * isValid checks raw values directly — fully independent of touched state
   * so the button is always disabled when the form is genuinely invalid.
   */
  isValid = computed(() => {
    const emailOk = this.email().length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email());
    const passwordOk = this.password().length >= 6;
    return emailOk && passwordOk;
  });

  onSubmit(event: Event) {
    event.preventDefault();

    // Touch all fields so empty-field errors appear if submitted early
    this.emailTouched.set(true);
    this.passwordTouched.set(true);

    if (!this.isValid()) return;

    this.formError.set('');
    this.successMessage.set('');

    this.store.dispatch(
      AuthActions.LoginAction({
        email: this.email(),
        password: this.password(),
      }),
    );
  }

  ngOnDestroy() {
    this.store.dispatch(AuthActions.ClearAuthErrorAction())
  }
}
