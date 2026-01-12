import {  CommonModule } from '@angular/common';
import { Component,  signal, OnInit } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';
@Component({
  selector: 'app-mode-toggle',
  imports: [LucideAngularModule, CommonModule],
  standalone: true,
  templateUrl: './mode-toggle.html',
  styleUrls: ['./mode-toggle.css'],
})
export class ModeToggle implements OnInit {
  mode = signal<'light' | 'dark'>('light');

  sunIcon = Sun;
  moonIcon = Moon;

  ngOnInit(): void {
    const savedMode = localStorage.getItem('mode') as 'light' | 'dark' | null;
    if (savedMode) this.applyMode(savedMode);
  }

  toggleMode() {
    const newMode = this.mode() === 'light' ? 'dark' : 'light';
    this.applyMode(newMode);
  }

  private applyMode(mode: 'light' | 'dark') {
    this.mode.set(mode);
    const html = document.documentElement;
    html.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('mode', mode);
  }
}
