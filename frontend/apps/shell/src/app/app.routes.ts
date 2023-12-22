import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'competency-matrix',
    loadChildren: () =>
      import('competency-matrix/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
