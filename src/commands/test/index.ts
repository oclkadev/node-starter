import { Command } from 'commander';

import { OPTION_QUIET, OPTION_VERBOSE } from '@/commands/options';
import { testHandler } from '@/commands/test/handler';

export const testCommand = new Command('test')
  .description('Test command scaffold')
  .option(...OPTION_QUIET)
  .option(...OPTION_VERBOSE)
  .action(testHandler);
