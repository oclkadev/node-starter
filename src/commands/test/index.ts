import { Command } from 'commander';

import { OPTION_QUIET, OPTION_VERBOSE } from '@/commands/options';
import { io } from '@/ui/io';

export const testCommand = new Command('test')
  .description('...')
  .option(...OPTION_QUIET)
  .option(...OPTION_VERBOSE)
  .action((options: { verbose?: boolean }) => {
    const message = `TEST ${options.verbose ? '(verbose)' : ''}`;
    io.info(message);
  });
