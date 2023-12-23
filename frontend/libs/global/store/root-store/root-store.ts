import { signalStore, withHooks, withState } from '@ngrx/signals';
import { EnvironmentModel } from '../../models';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { withRootStoreMethods } from './root-store.methods';
import { withRootStoreSelectors } from './root-store.selectors';

export interface RootState {
  envConfig: {
    envConfigData: EnvironmentModel | null;
    isEnvConfigPending: boolean;
    error: unknown;
  };
  uiConfig: {
    isTopMenuShowing: boolean
  };
}

export const initialState: RootState = {
  envConfig: {
    envConfigData: null,
    isEnvConfigPending: false,
    error: null,
  },
  uiConfig: {
    isTopMenuShowing: true,
  },
};


export const RootStore = signalStore(
  {providedIn: 'root'},
  withDevtools('RootStore'),
  withState(initialState),
  withRootStoreMethods(),
  withRootStoreSelectors(),

  withHooks({
    onInit({getEnvConfig}) {
      getEnvConfig();
    },
    onDestroy({resetStore}) {
      resetStore();
    },
  }),
);
