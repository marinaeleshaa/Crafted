import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown {
  items = input.required<{ label: string; href: string }[]>();
  button = input();
  width = input<string>('w-full');
  align = input<'left' | 'right'>('left');
  variant = input<'filled' | 'transparent'>('filled');

  get alignmentClasses() {
    return this.align() === 'right' ? 'origin-top-right right-0' : 'origin-top-left left-0';
  }

  get variantClasses() {
    return this.variant() === 'filled' ? 'bg-secondary' : 'bg-background';
  }
}
