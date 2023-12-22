import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth',
  exposes: {
    './Routes': 'apps/auth/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
