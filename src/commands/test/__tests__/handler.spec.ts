import { testHandler } from '@/commands/test/handler';
import { io } from '@/ui/io';

describe('testHandler', () => {
  let infoSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    infoSpy = vi.spyOn(io, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    io.reset();
  });

  it('calls io.info with TEST when verbose is false', () => {
    testHandler({ verbose: false });

    expect(infoSpy).toHaveBeenCalledWith('TEST');
  });

  it('calls io.info with TEST (verbose) when verbose is true', () => {
    testHandler({ verbose: true });

    expect(infoSpy).toHaveBeenCalledWith('TEST (verbose)');
  });

  it('calls io.info with TEST when options is empty', () => {
    testHandler({});

    expect(infoSpy).toHaveBeenCalledWith('TEST');
  });
});
