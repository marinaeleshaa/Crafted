// import { Component, computed, signal } from '@angular/core';
// import { Button } from '../../../components/ui/button/button';
// import { Input } from '../../../components/ui/input/input';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-signup-form',
//   imports: [Button, Input, RouterLink],
//   templateUrl: './signup-form.html',
//   styleUrl: './signup-form.css',
// })
// export class SignupForm {
//   // Form fields
//   username = signal<string>('');
//   email = signal<string>('');
//   password = signal<string>('');
//   confirmPassword = signal<string>('');

//   // Form state
//   isLoading = signal(false);
//   formError = signal('');
//   successMessage = signal('');
//   usernameTouched = signal<boolean>(false);
//   emailTouched = signal<boolean>(false);
//   passwordTouched = signal(false);
//   confirmPasswordTouched = signal(false);
//   usernameError = computed(() => {
//     if (this.usernameTouched() && this.username() === '') {
//       return 'Username is required';
//     } else if (this.username().length > 0 && this.username().length < 3) {
//       return 'Username must be at least 3 characters';
//     }
//     return '';
//   });
//   emailError = computed(() => {
//     if (this.emailTouched() && this.email() === '') {
//       return 'Email is required';
//     } else if (this.email().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())) {
//       return 'Please enter a valid email address';
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
//   confirmPasswordError = computed(() => {
//     if (this.confirmPasswordTouched() && this.confirmPassword() === '') {
//       return 'Please confirm your password';
//     } else if (this.confirmPassword() !== this.password()) {
//       return 'Passwords do not match';
//     }
//     return '';
//   });

//   isValid = computed(() => {
//     return (
//       this.usernameError() === '' &&
//       this.emailError() === '' &&
//       this.passwordError() === '' &&
//       this.confirmPasswordError() === '' &&
//       this.username() !== '' &&
//       this.email() !== '' &&
//       this.password() !== '' &&
//       this.confirmPassword() !== ''
//     );
//   });

//   onSubmit(event: Event) {
//     event.preventDefault();
//     if (!this.isValid()) {
//       return;
//     }
//     // Reset errors

//     this.usernameTouched.set(false);
//     this.emailTouched.set(false);
//     this.passwordTouched.set(false);
//     this.confirmPasswordTouched.set(false);
//     this.formError.set('');
//     this.successMessage.set('');

//     // Simulate API call
//     this.isLoading.set(true);

//     setTimeout(() => {
//       // Simulate successful login
//       this.isLoading.set(false);
//       this.successMessage.set('Login successful! Redirecting...');

//       console.log('Login credentials:', {
//         username: this.username(),
//         email: this.email(),
//         password: this.password(),
//         confirmPassword: this.confirmPassword(),
//       });

//       // In a real app, you would navigate to the dashboard here
//       // this.router.navigate(['/dashboard']);
//       this.username.set('');
//       this.email.set('');
//       this.password.set('');
//       this.confirmPassword.set('');
//     }, 1500);

//   }
// }


import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { Button } from '../../../components/ui/button/button';
import { Input } from '../../../components/ui/input/input';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SelectAuthLoading, SelectAuthError, SelectIsAuthenticated } from '../../../store/auth/auth.selectors';
import * as AuthActions from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-signup-form',
  imports: [Button, Input, RouterLink],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignupForm {
  // Form fields
  username = signal<string>('');
  email = signal<string>('');
  password = signal<string>('');
  confirmPassword = signal<string>('');

  // Form state
  isLoading = signal(false);
  formError = signal('');
  successMessage = signal('');

  // Touched flags — only used to trigger the "required" message on blur for empty fields
  usernameTouched = signal(false);
  emailTouched = signal(false);
  passwordTouched = signal(false);
  confirmPasswordTouched = signal(false);

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
   * Error computeds follow this rule:
   * - If the field is empty: only show "required" after the field has been touched (blur).
   * - If the field has a value: always validate immediately (no touch gate).
   * This way inline validation fires while typing, but empty-field nagging waits for blur.
   */
  usernameError = computed(() => {
    if (this.username().length === 0) {
      return this.usernameTouched() ? 'Username is required' : '';
    }
    if (this.username().length < 3) return 'Username must be at least 3 characters';
    if (this.username().length > 20) return 'Username cannot exceed 20 characters';
    if(this.username().match(/[^a-zA-Z0-9_]/g)) return 'Username can only contain letters, numbers, and underscores'
    return '';
  });

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

  confirmPasswordError = computed(() => {
    if (this.confirmPassword().length === 0) {
      return this.confirmPasswordTouched() ? 'Please confirm your password' : '';
    }
    // Only compare once the user has actually typed into the confirm field
    if (this.confirmPassword() !== this.password()) return 'Passwords do not match';
    return '';
  });

  /**
   * isValid is entirely independent of touched state —
   * it checks real field values and actual validation rules.
   * This ensures the button is disabled whenever the form is truly invalid,
   * regardless of whether the user has interacted with any field.
   */
  isValid = computed(() => {
    const usernameOk = this.username().length >= 3;
    const emailOk =
      this.email().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email());
    const passwordOk = this.password().length >= 6;
    const confirmOk =
      this.confirmPassword().length > 0 &&
      this.confirmPassword() === this.password();

    return usernameOk && emailOk && passwordOk && confirmOk;
  });

  onSubmit(event: Event) {
    event.preventDefault();

    // Touch all fields so empty-field errors appear if the user hits submit early
    this.usernameTouched.set(true);
    this.emailTouched.set(true);
    this.passwordTouched.set(true);
    this.confirmPasswordTouched.set(true);

    if (!this.isValid()) return;

    this.formError.set('');
    this.successMessage.set('');

    this.store.dispatch(
      AuthActions.SignupAction({
        username: this.username(),
        email: this.email(),
        password: this.password(),
      }),
    );
  }
}
