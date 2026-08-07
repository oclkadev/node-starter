import { execa } from 'execa';

export function runCli(...arguments_: string[]) {
  return execa('tsx', ['src/index.ts', ...arguments_], {
    reject: false,
    preferLocal: true,
    env: { NODE_ENV: 'development' },
  });
}
