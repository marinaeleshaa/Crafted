import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
    title: 'Crafted',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
    title: 'About Us',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page').then((m) => m.ContactPage),
    title: 'Contact Us',
  },{
    path: 'store',
    loadComponent: () => import('./pages/store-page/store-page').then((m) => m.StorePage),
    title: 'Store',
  }
];
