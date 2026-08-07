import { version } from '@/../package.json';
import { runCli } from '@/tests/e2e/helpers/run-cli';

describe('CLI e2e', () => {
  describe('--version', () => {
    it.each(['-v', '--version'])('outputs version with %s', async (flag) => {
      const { stdout, exitCode } = await runCli(flag);

      expect(exitCode).toBe(0);
      expect(String(stdout).trim()).toBe(version);
    });
  });

  describe('--help', () => {
    it.each(['-h', '--help'])('outputs root help with %s', async (flag) => {
      const { stdout, exitCode } = await runCli(flag);

      expect(exitCode).toBe(0);
      expect(stdout).toContain('Usage: cli [options] [command]');
      expect(stdout).toContain('-v, --version');
      expect(stdout).toContain('-h, --help');
      expect(stdout).toContain('test [options]');
    });

    it('outputs test subcommand help with test -h', async () => {
      const { stdout, exitCode } = await runCli('test', '-h');

      expect(exitCode).toBe(0);
      expect(stdout).toContain('Usage: cli test [options]');
      expect(stdout).toContain('Test command scaffold');
      expect(stdout).toContain('--quiet -q');
      expect(stdout).toContain('--verbose -V');
    });
  });
});
