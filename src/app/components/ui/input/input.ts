// import { Component, input, output, signal, computed, OnInit, effect } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { Eye, EyeClosed, LucideAngularModule } from 'lucide-angular';

// @Component({
//   selector: 'app-input',
//   standalone: true,
//   imports: [CommonModule, FormsModule, LucideAngularModule],
//   templateUrl: './input.html',
// })
// export class Input {
//   readonly openedEye = Eye;
//   readonly closedEye = EyeClosed;

//   // Inputs props
//   id = input<string>('input-' + Math.random().toString(36).substr(2, 9));
//   label = input<string>('');
//   type = input<string>('text');
//   name = input<string>('');
//   placeholder = input<string>('');
//   required = input<boolean>(false);
//   disabled = input<boolean>(false);
//   error = input<string>('');
//   hint = input<string>('');
//   value = input<string>('');
//   visible = signal<boolean>(false);

//   mainType = computed(() => {
//     if (this.type() === 'password') {
//       return this.visible() ? 'text' : 'password';
//     }
//     return this.type();
//   });

//   eyeIcon = computed(() => {
//     return this.visible() ? this.openedEye : this.closedEye;
//   });

//   // Outputs
//   valueChange = output<string>();
//   onTouched = output<void>();

//   constructor() {
//     effect(() => {
//       this.inputValue.set(this.value());
//     });
//   }

//   togglePasswordVisibility() {
//     this.visible.set(!this.visible());
//   }
//   // Internal state
//   inputValue = signal('');
//   touched = signal(false);

//   // Computed: label should float up when focused or has value
//   shouldFloat = computed(() => this.inputValue().length > 0);

//   onValueChange(value: string) {
//     this.inputValue.set(value);
//     this.valueChange.emit(this.inputValue());
//   }

//   onBlur() {
//     this.touched.set(true);
//     this.onTouched.emit(); //? Notify parent form that input was touched
//   }

//   labelClasses() {
//     const base = 'text-sm opacity-0 font-medium ';
//     const color = 'text-foreground/90!';
//     const floated = '-top-6 left-1 opacity-100   text-lg';
//     const resting = 'top-3 left-4 text-sm ';

//     return `${base} ${color} ${this.shouldFloat() ? floated : resting}`;
//   }

//   inputClasses() {
//     const baseClasses =
//       'w-full px-4 py-3 rounded-xl transition-all outline-none duration-200 focus:ring-pop/30 focus:outline-none focus:ring-3 ';
//     const normalClasses =
//       'border-gray-300 bg-secondary/80 text-secondary-foreground placeholder-foreground/60 focus:border-blue-500 focus:ring-blue-500';
//     const errorClasses =
//       'border-pop bg-secondary text-secondary-foreground placeholder-pop focus:border-pop focus:ring-pop';
//     const disabledClasses = 'bg-secondary cursor-not-allowed opacity-60';

//     const typeClasses = this.type() === 'password' ? 'pr-12!' : '';

//     if (this.disabled()) {
//       return `${baseClasses} ${disabledClasses}`;
//     }

//     if (this.error() && this.touched()) {
//       return `${baseClasses} ${errorClasses}`;
//     }

//     return `${baseClasses} ${normalClasses} ${typeClasses}`;
//   }
// }

import { Component, input, output, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Eye, EyeClosed, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './input.html',
})
export class Input {
  readonly openedEye = Eye;
  readonly closedEye = EyeClosed;

  // Input props
  id = input<string>('input-' + Math.random().toString(36).substr(2, 9));
  label = input<string>('');
  type = input<string>('text');
  name = input<string>('');
  placeholder = input<string>('');
  required = input<boolean>(false);
  disabled = input<boolean>(false);
  error = input<string>('');
  hint = input<string>('');
  value = input<string>('');

  visible = signal<boolean>(false);

  mainType = computed(() =>
    this.type() === 'password'
      ? this.visible() ? 'text' : 'password'
      : this.type()
  );

  eyeIcon = computed(() => (this.visible() ? this.openedEye : this.closedEye));

  // Outputs
  valueChange = output<string>();
  onTouched = output<void>();

  // Internal state
  inputValue = signal('');
  /** touched: user has left the field at least once */
  touched = signal(false);
  /** dirty: user has typed at least one character */
  dirty = signal(false);

  constructor() {
    effect(() => {
      this.inputValue.set(this.value());
    });
  }

  togglePasswordVisibility() {
    this.visible.set(!this.visible());
  }

  /**
   * Show error as soon as the user has typed (dirty) OR left the field (touched),
   * and an error string is present.
   */
  shouldShowError = computed(
    () => (this.dirty() || this.touched()) && this.error() !== ''
  );

  shouldFloat = computed(() => this.inputValue().length > 0);

  onValueChange(value: string) {
    this.dirty.set(true);
    this.inputValue.set(value);
    this.valueChange.emit(value);
  }

  onBlur() {
    this.touched.set(true);
    this.onTouched.emit();
  }

  labelClasses() {
    const base = 'text-sm opacity-0 font-medium ';
    const color = 'text-foreground/90!';
    const floated = '-top-6 left-1 opacity-100 text-lg';
    const resting = 'top-3 left-4 text-sm';
    return `${base} ${color} ${this.shouldFloat() ? floated : resting}`;
  }

  inputClasses() {
    const base =
      'w-full px-4 py-3 rounded-xl transition-all outline-none duration-200 focus:ring-pop/30 focus:outline-none focus:ring-3 ';
    const normal =
      'border-gray-300 bg-secondary/80 text-secondary-foreground placeholder-foreground/60 focus:border-blue-500 focus:ring-blue-500';
    const errorStyle =
      'border-pop bg-secondary text-secondary-foreground placeholder-pop focus:border-pop focus:ring-pop';
    const disabledStyle = 'bg-secondary cursor-not-allowed opacity-60';
    const passwordPadding = this.type() === 'password' ? 'pr-12!' : '';

    if (this.disabled()) return `${base} ${disabledStyle}`;
    if (this.shouldShowError()) return `${base} ${errorStyle}`;
    return `${base} ${normal} ${passwordPadding}`;
  }
}
