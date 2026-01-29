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
  variant = input<'primary' | 'outline' | 'ghost' | 'link'|'icon'>('primary');
  rounded = input<'sm' | 'md' | 'lg' | 'full'>('full');

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
      primary: 'bg-pop text-pop-foreground hover:shadow-lg hover:shadow-pop/25 ',
      outline: 'border-2 border-pop text-pop hover:shadow-lg hover:shadow-pop/25',
      ghost: 'text-pop hover:bg-pop hover:text-pop-foreground hover:shadow-lg hover:shadow-pop/25',
      link: 'text-primary hover:text-pop',
      icon: ' text-primary hover:text-pop  ',
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



}
