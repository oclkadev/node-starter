import { runCli } from '@/tests/e2e/helpers/run-cli';

describe('test command e2e', () => {
  it('outputs TEST by default', async () => {
    const { stdout, exitCode } = await runCli('test');

    expect(exitCode).toBe(0);
    expect(stdout).toContain('TEST');
  });

  it.each(['--verbose', '-V'])(
    'outputs TEST (verbose) with %s',
    async (flag) => {
      const { stdout, exitCode } = await runCli('test', flag);

      expect(exitCode).toBe(0);
      expect(stdout).toContain('TEST (verbose)');
    },
  );

  it.each(['--quiet', '-q'])('suppresses output with %s', async (flag) => {
    const { stdout, exitCode } = await runCli('test', flag);

    expect(exitCode).toBe(0);
    expect(String(stdout).trim()).toBe('');
  });
});
