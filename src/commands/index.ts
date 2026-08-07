import { Command, CommanderError } from 'commander';

import { version } from '@/../package.json';
import { testCommand } from '@/commands/test';
import { io } from '@/ui/io';

const command = new Command('cli');
command
  .version(version, '-v, --version', 'output the current version')
  .exitOverride()
  .configureOutput({
    outputError: () => {},
  });

const subCommands: Command[] = [testCommand];
for (const subCommand of subCommands) command.addCommand(subCommand);

command.hook('preAction', (_command, actionCommand) => {
  const options = actionCommand.opts();
  io.configure({
    quiet: options['quiet'] ?? false,
    verbose: options['verbose'] ?? false,
    dryRun: options['dryRun'] ?? false,
  });
});

export async function runCli() {
  try {
    await command.parseAsync();
  } catch (error: unknown) {
    if (error instanceof CommanderError && error.exitCode === 0) {
      return;
    }
    throw error;
  }
}
