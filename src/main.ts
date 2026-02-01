import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const savedMode = localStorage.getItem('mode');

if (savedMode === 'dark') {
  document.documentElement.classList.add('dark');
}


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
