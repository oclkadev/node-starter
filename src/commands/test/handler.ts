import { io } from '@/ui/io';

interface TestOptions {
  verbose?: boolean;
}

export function testHandler(options: TestOptions): void {
  const message = options.verbose ? 'TEST (verbose)' : 'TEST';
  io.info(message);
}
