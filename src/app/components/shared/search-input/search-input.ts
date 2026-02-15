import { Component, HostListener, signal } from '@angular/core';
import { LucideAngularModule, Search, TextAlignJustify } from 'lucide-angular';
import { Dropdown } from '../../ui/dropdown/dropdown';
import { SearchInputOverlay } from "../search-input-overlay/search-input-overlay";

@Component({
  selector: 'app-search-input',
  imports: [LucideAngularModule, Dropdown, SearchInputOverlay],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput {
  dropdownOpen = false;
  readonly icon = TextAlignJustify;
  readonly searchIcon = Search;
  isOverlayOpen = signal(false);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // ? Close dropdowns if clicked outside
    if (!target.closest('.dropdown-wrapper')) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleOverlay() {
    this.isOverlayOpen.update((open) => !open);
  }

  closeDropdown() {
    setTimeout(() => {
      this.dropdownOpen = false;
    }, 200);
  }
}
