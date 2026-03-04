// import { Component, computed, effect, signal } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Input } from '../../../components/ui/input/input';
// import { Button } from '../../../components/ui/button/button';
// import { Router, RouterLink } from '@angular/router';
// import { Store } from '@ngrx/store';
// import * as AuthActions from '../../../store/auth/auth.actions';

// @Component({
//   selector: 'app-login-form',
//   standalone: true,
//   imports: [CommonModule, FormsModule, Input, Button, RouterLink],
//   templateUrl: './login-form.html',
// })
// export class LoginComponent {
//   // Form fields
//   username = signal<string>('');
//   password = signal<string>('');
//   visible = signal<boolean>(false);

//   constructor(
//     private store: Store,
//     private router: Router,
//   ) {}
//   // Form state
//   isLoading = signal(false);
//   formError = signal('');
//   successMessage = signal('');
//   usernameTouched = signal<boolean>(false);
//   passwordTouched = signal(false);
//   usernameError = computed(() => {
//     if (this.usernameTouched() && this.username() === '') {
//       return 'Username is required';
//     } else if (this.username().length > 0 && this.username().length < 3) {
//       return 'Username must be at least 3 characters';
//     }
//     return '';
//   });
//   passwordError = computed(() => {
//     if (this.passwordTouched() && this.password() === '') {
//       return 'Password is required';
//     } else if (this.password().length > 0 && this.password().length < 6) {
//       return 'Password must be at least 6 characters';
//     }
//     return '';
//   });

//   isValid = computed(() => {
//     return (
//       this.usernameError() === '' &&
//       this.passwordError() === '' &&
//       this.username() !== '' &&
//       this.password() !== ''
//     );
//   });

//   togglePasswordVisibility() {
//     this.visible.set(!this.visible());
//   }

//   onSubmit(event: Event) {
//     event.preventDefault();
//     if (!this.isValid()) {
//       return;
//     }
//     // Reset errors

//     this.usernameTouched.set(false);
//     this.passwordTouched.set(false);
//     this.formError.set('');
//     this.successMessage.set('');

//     // Simulate API call
//     this.isLoading.set(true);

//     // this.store.dispatch(
//     //   AuthActions.LoginAction({
//     //     username: this.username(),
//     //     password: this.password(),
//     //   }),
//     // );

//     setTimeout(() => {
//       // Simulate successful loginz
//       this.isLoading.set(false);
//       this.successMessage.set('Login successful! Redirecting...');

//       // In a real app, you would navigate to the dashboard here
//       this.router.navigate(['/']);
//       this.username.set('');
//       this.password.set('');
//     }, 1500);
//   }
// }

import { Component, computed, signal, effect, DestroyRef, inject } from '@angular/core';
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
export class LoginComponent {
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
}
