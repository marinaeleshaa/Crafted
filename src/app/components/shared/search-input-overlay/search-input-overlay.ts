import { Component, HostListener, output, signal } from '@angular/core';
import { Dropdown } from '../../ui/dropdown/dropdown';
import { LucideAngularModule, Search, TextAlignJustify, X } from 'lucide-angular';
import { Button } from '../../ui/button/button';

@Component({
  selector: 'app-search-input-overlay',
  imports: [Dropdown, LucideAngularModule, Button],
  templateUrl: './search-input-overlay.html',
  styleUrl: './search-input-overlay.css',
})
export class SearchInputOverlay {
  dropdownOpen = false;
  readonly icon = TextAlignJustify;
  readonly searchIcon = Search;
  readonly closeIcon = X;

  closeOverlayEvent = output();

  closeOverlay() {
    this.closeOverlayEvent.emit();
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
}
