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
  variant = input<'primary' | 'outline' | 'ghost' | 'link' | 'icon'>('primary');
  rounded = input<'sm' | 'md' | 'lg' | 'full'>('full');
  size = input<'sm' | 'md' | 'lg'>('md');
  disabled=input<boolean>(false)
  type=input<'button' | 'submit' | 'reset'>('button')

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
      primary: 'bg-pop text-pop-foreground group-hover:shadow-lg group-hover:shadow-pop/25 ',
      outline:
        'border-2 border-pop/30 group-hover:border-pop text-pop group-hover:shadow-lg group-hover:shadow-pop/25',
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
      full: 'rounded-full',
    }[this.rounded()];
  }

  get sizeClass() {
    return {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-5 py-3 text-lg',
    }[this.size()];
  }

  allClasses() {
    if (this.disabled()) {
      return `opacity-50 cursor-not-allowed! hover:scale-100!   ${this.widthClass} ${this.variantClass} ${this.roundedClass} ${this.sizeClass} ${this.extraClassesList}`;
    }
    return `${this.widthClass} ${this.variantClass} ${this.roundedClass} ${this.sizeClass} ${this.extraClassesList}`;
  }
}
