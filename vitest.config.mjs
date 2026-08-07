import { defineConfig } from 'vitest/config';

import ignores from './ignores.mjs';
import testExclude from './test-exclude.mjs';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      all: false,
      include: ['src/**/*.ts'],
      exclude: testExclude,
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          globals: true,
          environment: 'node',
          timeout: 10_000,
          setupFiles: ['./tests/setup.ts'],
          exclude: [...ignores],
          include: ['src/**/*.spec.ts'],
        },
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          globals: true,
          environment: 'node',
          timeout: 30_000,
          setupFiles: ['./tests/setup.ts'],
          exclude: [...ignores],
          include: ['src/**/*.e2e-spec.ts'],
          sequence: {
            concurrent: false,
          },
        },
      },
    ],
  },
});
