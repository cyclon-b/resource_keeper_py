import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { AuthState } from './auth-store';
import { computed } from '@angular/core';

export function withAuthSelectors() {
  return signalStoreFeature(
    {state: type<AuthState>()},
    withComputed(({token, user, error, isAuthenticated, isAuthenticationPending}) => ({
      selectedAuthToken: computed(() => token()),
      selectedUser: computed(() => user()),
      selectedAuthError: computed(() => error()),
      selectedIsAuthenticated: computed(() => isAuthenticated()),
      selectedIsAuthenticationPending: computed(() => isAuthenticationPending()),
    })),
  );

}
