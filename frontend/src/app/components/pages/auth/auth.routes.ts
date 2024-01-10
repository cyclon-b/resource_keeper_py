import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NavigationService } from '../../../global/services/utils/navigation/navigation.service';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        redirectTo: NavigationService.getRoutePaths().authPaths.login,
        pathMatch: 'full',
    },
    {
        path: NavigationService.getRoutePaths().authPaths.login,
        component: LoginComponent,
    },
    {
        path: NavigationService.getRoutePaths().authPaths.register,
        component: RegisterComponent,
    },
    {
        path: NavigationService.getRoutePaths().authPaths.forgotPassword,
        component: ForgotPasswordComponent,
    },
    {
        path: NavigationService.getRoutePaths().authPaths.resetPassword,
        component: ResetPasswordComponent,
    },
];
