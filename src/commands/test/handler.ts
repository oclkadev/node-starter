import { io } from '@/ui/io';

interface TestOptions {
  quiet?: boolean;
  verbose?: boolean;
  dryRun?: boolean;
}

export function testHandler(options: TestOptions): void {
  const message = options.verbose ? 'TEST (verbose)' : 'TEST';
  io.info(message);
}
