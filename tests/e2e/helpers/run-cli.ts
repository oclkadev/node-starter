import { execa } from 'execa';

export function runCli(...arguments_: string[]) {
  return execa('./node_modules/.bin/tsx', ['src/index.ts', ...arguments_], {
    reject: false,
    env: { NODE_ENV: 'development' },
  });
}
