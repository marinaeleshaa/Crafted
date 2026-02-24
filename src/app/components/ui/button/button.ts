import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  extraClasses = input<string>('');
  width = input<'fit' | 'full'>('fit');
  variant = input<'primary' | 'secondary' |'pop' | 'outline' | 'ghost' | 'link' | 'icon'>('primary');
  rounded = input<'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'>('xl');
  size = input< 'xs' |'sm' | 'md' | 'lg'>('md');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit' | 'reset'>('button');
  textTransform = input<'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'>('capitalize');

  get extraClassesList() {
    return this.extraClasses();
  }

  get widthClass() {
    return {
      fit: 'w-fit',
      full: 'w-full',
    }[this.width()];
  }

  get variantClass() {
    return {
      primary: 'bg-primary text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25 ',
      secondary: 'bg-secondary text-secondary-foreground  group-hover:shadow-lg group-hover:shadow-secondary/25',
      pop: 'bg-pop text-pop-foreground  group-hover:shadow-lg group-hover:shadow-pop/25',
      outline:
        'border-2 border-primary/30 group-hover:border-primary text-primary group-hover:shadow-lg group-hover:shadow-primary/25',
      ghost: '  group-hover:text-pop-foreground group-hover:shadow-lg group-hover:shadow-pop/25',
      link: 'text-foreground  hover:text-secondary-foreground',
      icon: ' text-pop/80 hover:text-pop p-0! ',
    }[this.variant()];
  }

  get roundedClass() {
    return {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    }[this.rounded()];
  }

  get sizeClass() {
    return {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-3 text-lg',
    }[this.size()];
  }

  get textTransformClass() {
    return {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      'normal-case': 'normal-case',
    }[this.textTransform()];
  }

  allClasses() {
    if (this.disabled()) {
      return `opacity-50 cursor-not-allowed! hover:scale-100!   ${this.widthClass} ${this.variantClass} ${this.roundedClass} ${this.sizeClass} ${this.extraClassesList}`;
    }
    return `${this.widthClass} ${this.textTransformClass} ${this.variantClass} ${this.roundedClass} ${this.sizeClass} ${this.extraClassesList}`;
  }
}
