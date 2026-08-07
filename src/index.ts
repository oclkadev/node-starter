import { runCli } from '@/commands/index';
import { formatErrorMessage, getErrorMessage } from '@/core/errors';
import { io } from '@/ui/io';

void (async () => {
  try {
    await runCli();
  } catch (error) {
    const message = formatErrorMessage(getErrorMessage(error));
    io.error(message);
    process.exit(1);
  }
})();
