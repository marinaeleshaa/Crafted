import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';
import { ModeToggle } from './components/shared/mode-toggle/mode-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModeToggle, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Crafted');
}
