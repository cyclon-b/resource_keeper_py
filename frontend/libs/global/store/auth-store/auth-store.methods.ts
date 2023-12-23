import { patchState, signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { AuthState } from './auth-store';
import { inject } from '@angular/core';
import { AuthService } from '../../utils';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';

export function withAuthMethods() {
  return signalStoreFeature(
    {state: type<AuthState>()},
    withMethods((store, authService = inject(AuthService)) => ({
      login: rxMethod<void>(pipe(
        switchMap( _ => { patchState(store, {isAuthenticationPending: true})) }
      ))

    })));
}
