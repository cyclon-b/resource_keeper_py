import { signalStore, withHooks, withState } from '@ngrx/signals';
import { withAuthMethods } from './auth-store.methods';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { UserModel } from '../../models';
import { withAuthSelectors } from './auth-store.selectors';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: UserModel | null;
  isAuthenticationPending: boolean;
  error: unknown;
}

export const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  user: null,
  isAuthenticationPending: false,
  error: null,
};


export const AuthStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withDevtools('AuthStore'),
  withAuthSelectors(),
  withAuthMethods(),
);
