import { defineConfig } from 'vitest/config';

import ignores from './ignores.mjs';
import testIgnores from './test-ignores.mjs';

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
      exclude: [
        '**/*.e2e-spec.ts',
        'src/__tests__/**',
        'src/**/__tests__/**',
        'src/**/__e2e__/**',
        'src/**/types/**',
        ...testIgnores,
      ],
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          globals: true,
          environment: 'node',
          timeout: 10_000,
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
