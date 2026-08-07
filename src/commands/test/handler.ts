import { io } from '@/ui/io';

interface TestOptions {
  quiet?: boolean;
  verbose?: boolean;
  dryRun?: boolean;
}

export function testHandler(options: TestOptions): void {
  const message = `TEST ${options.verbose ? '(verbose)' : ''}`;
  io.info(message);
}
