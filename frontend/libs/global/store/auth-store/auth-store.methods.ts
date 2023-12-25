import { patchState, signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { AuthState, initialState } from './auth-store';
import { inject } from '@angular/core';
import { AuthService } from '../../utils';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { LoginModel, RegisterModel } from '../../models';
import { tapResponse } from '@ngrx/operators';

export function withAuthMethods() {
  return signalStoreFeature(
    {state: type<AuthState>()},
    withMethods((store, authService = inject(AuthService)) => ({

      // TODO: Сделать редирект на дашборд
      register: rxMethod<RegisterModel>(pipe(
        switchMap((registerData: RegisterModel) => {
          patchState(store, {isAuthenticationPending: true});
          return authService.register(registerData).pipe(
            tapResponse({
              next: (response) => patchState(store, {user: response?.user, token: response?.token}),
              error: (err) => patchState(store, {error: err}),
              finalize: () => patchState(store, {isAuthenticationPending: false}),
            }),
          );
        }),
      )),

      // TODO: Сделать редирект на дашборд
      login: rxMethod<LoginModel>(pipe(
        switchMap((loginData: LoginModel) => {
          patchState(store, {isAuthenticationPending: true});
          return authService.login(loginData).pipe(
            tapResponse({
              next: (response) => patchState(store, {user: response?.user, token: response?.token}),
              error: (err) => patchState(store, {error: err}),
              finalize: () => patchState(store, {isAuthenticationPending: false}),
            }),
          );
        }),
      )),

      // TODO: Сделать редирект на логин
      logout: rxMethod<void>(pipe(
        switchMap(_ => {
          patchState(store, {isAuthenticationPending: true});
          return authService.logout().pipe(
            tapResponse({
              next: (response) => patchState(store, initialState),
              error: (err) => patchState(store, {error: err}),
              finalize: () => patchState(store, {isAuthenticationPending: false}),
            }),
          );
        }),
      )),

    })));
}
