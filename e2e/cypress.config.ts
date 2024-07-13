import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run ecom:serve',
        production: 'nx run ecom:preview',
      },
      ciWebServerCommand: 'nx run ecom:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
