import { Route } from '@angular/router';
import { authGuard } from './global/guards/auth/auth.guard';
import { NavigationService } from './global/services/utils/navigation/navigation.service';

export const APP_ROUTES: Route[] = [
    {
        path: '',
        redirectTo: NavigationService.getRoutePaths().dashboardPaths.dashboard,
        pathMatch: 'full',
    },
    {
        path: NavigationService.getRoutePaths().dashboardPaths.dashboard,
        loadChildren: () => import('../app/components/pages/dashboard/dashboard.routes').then(dr => dr.DASHBOARD_ROUTES),
        canActivate: [authGuard],
    },
];
