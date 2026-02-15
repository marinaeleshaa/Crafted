import { CommonModule } from '@angular/common';
import { Component, signal, OnInit, input } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';
import { Button } from '../../ui/button/button';

type ThemeMode = 'light' | 'dark';
@Component({
  selector: 'app-mode-toggle',
  imports: [LucideAngularModule, CommonModule, Button],
  standalone: true,
  templateUrl: './mode-toggle.html',
  styleUrls: ['./mode-toggle.css'],
})
export class ModeToggle implements OnInit {
  mode = signal<ThemeMode>('dark');
  text = input<boolean>(true);

  sunIcon = Sun;
  moonIcon = Moon;

  ngOnInit(): void {
    const savedMode = localStorage.getItem('mode') as 'light' | 'dark';
    if (savedMode) this.mode.set(savedMode);
  }

  toggleMode() {
    const newMode = this.mode() === 'light' ? 'dark' : 'light';
    localStorage.setItem('mode', newMode);
    this.applyMode(newMode);
  }

  private applyMode(mode: 'light' | 'dark') {
    this.mode.set(mode);
    const html = document.documentElement;
    html.classList.toggle('dark', mode === 'dark');
  }
}
