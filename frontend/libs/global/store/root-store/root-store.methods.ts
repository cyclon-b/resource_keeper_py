import { patchState, signalStoreFeature, type, withMethods } from '@ngrx/signals';
import { initialState, RootState } from './root-store';
import { inject } from '@angular/core';
import { EnvironmentService } from '../../utils/services/environment/environment.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export function withRootStoreMethods() {
  return signalStoreFeature(
    {state: type<RootState>()},
    withMethods((store, envService = inject(EnvironmentService)) => ({
      getEnvConfig: rxMethod<void>(pipe(
        switchMap(_ => {
          patchState(store, {envConfig: {...store.envConfig(), isEnvConfigPending: true}});

          return envService.getEnvironment().pipe(
            tapResponse({
              next: (config) => patchState(store, {envConfig: {...store.envConfig(), envConfigData: config}}),
              error: (err) => patchState(store, {envConfig: {...store.envConfig(), error: err}}),
              finalize: () => patchState(store, {envConfig: {...store.envConfig(), isEnvConfigPending: false}}),
            }),
          );
        }),
      )),
      setTopMenuShowing(value: boolean) {
        patchState(store, {uiConfig: {...store.uiConfig(), isTopMenuShowing: value}});
      },
      resetStore() {
        patchState(store, initialState);
      },
    })),
  );
}
