import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
    loadComponent: () => import('./Layout/main-layout/main-layout').then((m) => m.MainLayout),
    title: 'Crafted',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePage),
        title: 'Crafted | Home',
      },
      {
        path: 'navMenu',
        loadComponent: () =>
          import('./pages/nav-menu-page/nav-menu-page').then((m) => m.NavMenuPage),
      },
    ],
  },
  {
    path: '',
    loadComponent: () => import('./Layout/auth-layout/auth-layout').then((m) => m.AuthLayout),
    title: 'Login',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page').then((m) => m.LoginPage),
        title: 'Crafted | Login',
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/signup-page/signup-page').then((m) => m.SignupPage),
        title: 'Crafted | Sign Up',
      },
    ],
  },
];
