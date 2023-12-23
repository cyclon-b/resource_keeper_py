import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor, cacheInterceptor, errorsHandlerInterceptor } from '../../../../libs/global';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideHttpClient(withInterceptors([cacheInterceptor, authInterceptor, errorsHandlerInterceptor]))],
};
