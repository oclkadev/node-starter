import { execa } from 'execa';

const CLI = ['tsx', 'src/index.ts'];

export function runCli(...arguments_: string[]) {
  return execa('npx', [...CLI, ...arguments_], {
    reject: false,
    env: { NODE_ENV: 'development' },
  });
}
