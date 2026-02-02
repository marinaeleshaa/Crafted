import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input } from '../../../components/ui/input/input';
import { Button } from '../../../components/ui/button/button';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, Input, Button],
  templateUrl: './login-form.html',
})
export class LoginComponent {
  // Form fields
  username = signal<string>('');
  password = signal<string>('');

  // Form state
  isLoading = signal(false);
  formError = signal('');
  successMessage = signal('');
  usernameTouched = signal<boolean>(false);
  passwordTouched = signal(false);
  usernameError = computed(() => {
    if (this.usernameTouched() && this.username() === '') {
      return 'Username is required';
    } else if (this.username().length > 0 && this.username().length < 3) {
      return 'Username must be at least 3 characters';
    }
    return '';
  });
  passwordError = computed(() => {
    if (this.passwordTouched() && this.password() === '') {
      return 'Password is required';
    } else if (this.password().length > 0 && this.password().length < 6) {
      return 'Password must be at least 6 characters';
    }
    return '';
  });

  isValid = computed(() => {
    return (
      this.usernameError() === '' &&
      this.passwordError() === '' &&
      this.username() !== '' &&
      this.password() !== ''
    );
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.isValid()) {
      return;
    }
    // Reset errors

    this.usernameTouched.set(false);
    this.passwordTouched.set(false);
    this.formError.set('');
    this.successMessage.set('');

    // Simulate API call
    this.isLoading.set(true);

    setTimeout(() => {
      // Simulate successful login
      this.isLoading.set(false);
      this.successMessage.set('Login successful! Redirecting...');

      console.log('Login credentials:', {
        username: this.username(),
        password: this.password(),
      });

      // In a real app, you would navigate to the dashboard here
      // this.router.navigate(['/dashboard']);
    }, 1500);

      this.username.set('');
    this.password.set('');
  }
}
