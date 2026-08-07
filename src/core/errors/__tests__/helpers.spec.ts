import { formatErrorMessage, getErrorMessage } from '@/core/errors/helpers';

describe('formatErrorMessage', () => {
  it('returns "Unknown error." for empty string', () => {
    expect(formatErrorMessage('')).toBe('Unknown error.');
  });

  it('returns "Unknown error." for whitespace-only string', () => {
    expect(formatErrorMessage(' '.repeat(3))).toBe('Unknown error.');
  });

  it.each([
    ['error: something failed', 'Something failed.'],
    ['Error: something failed', 'Something failed.'],
    ['error: error: nested', 'Nested.'],
    ['ERROR: shouting', 'Shouting.'],
  ])('strips "error:" prefix from %j', (input, expected) => {
    expect(formatErrorMessage(input)).toBe(expected);
  });

  it('returns "Unknown error." when only "error:" remains after stripping', () => {
    expect(formatErrorMessage('error:')).toBe('Unknown error.');
  });

  it('returns JSON object as-is without sentence formatting', () => {
    const input = '{"code": 500, "msg": "fail"}';

    expect(formatErrorMessage(input)).toBe(input);
  });

  it('returns JSON array as-is without sentence formatting', () => {
    const input = '[1, 2, 3]';

    expect(formatErrorMessage(input)).toBe(input);
  });

  it('capitalizes and adds trailing period', () => {
    expect(formatErrorMessage('something went wrong')).toBe(
      'Something went wrong.',
    );
  });

  it('does not add trailing period if already present', () => {
    expect(formatErrorMessage('something went wrong.')).toBe(
      'Something went wrong.',
    );
  });

  it('does not add trailing period if ends with !', () => {
    expect(formatErrorMessage('watch out!')).toBe('Watch out!');
  });

  it('does not strip error: when it appears mid-text', () => {
    expect(formatErrorMessage('my error: fail')).toBe('My error: fail.');
  });
});

describe('getErrorMessage', () => {
  it('returns message from Error instance', () => {
    expect(getErrorMessage(new Error('boom'))).toBe('boom');
  });

  it('returns "Unknown error" for Error with non-string message property', () => {
    const err = new Error('placeholder');
    Object.defineProperty(err, 'message', { value: 42, configurable: true });
    expect(getErrorMessage(err)).toBe('Unknown error');
  });

  it('returns message from object with string message property', () => {
    expect(getErrorMessage({ message: 'fail' })).toBe('fail');
  });

  it('returns string as-is', () => {
    expect(getErrorMessage('plain string')).toBe('plain string');
  });

  it('returns "Unknown error" for null', () => {
    expect(getErrorMessage(null)).toBe('Unknown error');
  });

  it('returns "Unknown error" for undefined', () => {
    expect(getErrorMessage(undefined)).toBe('Unknown error');
  });

  it('returns JSON stringified for plain object without message', () => {
    expect(getErrorMessage({ code: 42 })).toBe('{"code":42}');
  });

  it('returns "Unknown error" for object with non-string message', () => {
    expect(getErrorMessage({ message: 123 })).toBe('{"message":123}');
  });

  it('returns "Unknown error" for circular object that cannot be stringified', () => {
    const circular: Record<string, unknown> = {};
    circular['self'] = circular;

    expect(getErrorMessage(circular)).toBe('Unknown error');
  });
});
