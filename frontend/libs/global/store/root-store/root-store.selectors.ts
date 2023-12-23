import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { RootState } from './root-store';
import { computed } from '@angular/core';

export function withRootStoreSelectors() {
  return signalStoreFeature(
    {state: type<RootState>()},
    withComputed(({envConfig, uiConfig}) => ({
      selectedEnvConfigData: computed(() => envConfig()?.envConfigData),
      selectedEnvConfigError: computed(() => envConfig()?.error),
      selectedEnvConfigPending: computed(() => envConfig()?.isEnvConfigPending),
      selectedUiConfig: computed(() => uiConfig()),
    })),
  );
}

