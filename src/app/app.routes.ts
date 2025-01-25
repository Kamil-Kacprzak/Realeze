import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '',
      pathMatch: 'full',
      loadComponent: () => {
        return import('./pages/home/home.component').then((m) => m.HomeComponent);
      },
    }
];
