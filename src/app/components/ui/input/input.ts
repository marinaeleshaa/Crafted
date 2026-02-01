import { Component, input, output, signal, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.html',
})
export class Input implements OnInit {
  // Inputs props
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

  // Outputs
  valueChange = output<string>();
  onTouched = output<void>();

  ngOnInit(): void {
    this.inputValue.set(this.value());
  }

  // Internal state
  inputValue = signal('');
  touched = signal(false);

  // Computed: label should float up when focused or has value
  shouldFloat = computed(() =>  this.inputValue().length > 0);

  onValueChange(value: string) {
    this.inputValue.set(value);
    this.valueChange.emit(this.inputValue());
  }



  onBlur() {
    this.touched.set(true);
    this.onTouched.emit(); //? Notify parent form that input was touched
  }

  labelClasses() {
    const base = 'text-sm opacity-0 font-medium';
    const color = 'text-background';
    const floated = '-top-6 left-2 opacity-100  text-lg';
    const resting = 'top-3 left-4 text-sm';

    return `${base} ${color} ${this.shouldFloat() ? floated : resting}`;
  }

  inputClasses() {
    const baseClasses =
      'w-full px-4 py-3 rounded-full transition-all outline-none duration-200 focus:ring-pop focus:outline-none focus:ring-3 ';
    const normalClasses =
      'border-gray-300 bg-secondary text-secondary-foreground placeholder-secondary-foreground/60 focus:border-blue-500 focus:ring-blue-500';
    const errorClasses =
      'border-pop bg-secondary text-secondary-foreground placeholder-pop focus:border-pop focus:ring-pop';
    const disabledClasses = 'bg-secondary cursor-not-allowed opacity-60';

    if (this.disabled()) {
      return `${baseClasses} ${disabledClasses}`;
    }

    if (this.error() && this.touched()) {
      return `${baseClasses} ${errorClasses}`;
    }

    return `${baseClasses} ${normalClasses}`;
  }
}
