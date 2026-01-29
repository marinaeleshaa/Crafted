import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/shared/navbar/navbar';
import { MobileNavbar } from "./components/shared/mobile-navbar/mobile-navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, MobileNavbar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Crafted');
}
