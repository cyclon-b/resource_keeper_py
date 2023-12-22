import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'competency-matrix',
  exposes: {
    './Routes': 'apps/competency-matrix/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
