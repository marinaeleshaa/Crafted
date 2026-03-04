import { Component, computed, signal } from '@angular/core';
import { Button } from '../../../components/ui/button/button';
import { Input } from '../../../components/ui/input/input';
import { RouterLink } from '@angular/router';

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
  usernameTouched = signal<boolean>(false);
  emailTouched = signal<boolean>(false);
  passwordTouched = signal(false);
  confirmPasswordTouched = signal(false);
  usernameError = computed(() => {
    if (this.usernameTouched() && this.username() === '') {
      return 'Username is required';
    } else if (this.username().length > 0 && this.username().length < 3) {
      return 'Username must be at least 3 characters';
    }
    return '';
  });
  emailError = computed(() => {
    if (this.emailTouched() && this.email() === '') {
      return 'Email is required';
    } else if (this.email().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email())) {
      return 'Please enter a valid email address';
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
  confirmPasswordError = computed(() => {
    if (this.confirmPasswordTouched() && this.confirmPassword() === '') {
      return 'Please confirm your password';
    } else if (this.confirmPassword() !== this.password()) {
      return 'Passwords do not match';
    }
    return '';
  });

  isValid = computed(() => {
    return (
      this.usernameError() === '' &&
      this.emailError() === '' &&
      this.passwordError() === '' &&
      this.confirmPasswordError() === '' &&
      this.username() !== '' &&
      this.email() !== '' &&
      this.password() !== '' &&
      this.confirmPassword() !== ''
    );
  });

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.isValid()) {
      return;
    }
    // Reset errors

    this.usernameTouched.set(false);
    this.emailTouched.set(false);
    this.passwordTouched.set(false);
    this.confirmPasswordTouched.set(false);
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
        email: this.email(),
        password: this.password(),
        confirmPassword: this.confirmPassword(),
      });

      // In a real app, you would navigate to the dashboard here
      // this.router.navigate(['/dashboard']);
      this.username.set('');
      this.email.set('');
      this.password.set('');
      this.confirmPassword.set('');
    }, 1500);

  }
}
