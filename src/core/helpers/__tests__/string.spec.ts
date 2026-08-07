import { toSentence } from '@/core/helpers/string';

describe('toSentence', () => {
  it('returns empty string for empty input', () => {
    expect(toSentence('')).toBe('');
  });

  it('returns empty string for whitespace-only input', () => {
    expect(toSentence(' '.repeat(3))).toBe('');
  });

  it('capitalizes first letter and adds trailing period', () => {
    expect(toSentence('hello world')).toBe('Hello world.');
  });

  it('does not add period when text ends with period', () => {
    expect(toSentence('hello world.')).toBe('Hello world.');
  });

  it.each([
    ['watch out!', 'Watch out!'],
    ['is this?', 'Is this?'],
    ['no way!', 'No way!'],
  ])('does not add punctuation when ending with %j', (input, expected) => {
    expect(toSentence(input)).toBe(expected);
  });

  it('preserves already-capitalized text', () => {
    expect(toSentence('Hello world')).toBe('Hello world.');
  });

  it('trims leading and trailing whitespace', () => {
    expect(toSentence('  hello  ')).toBe('Hello.');
  });

  it('handles single character', () => {
    expect(toSentence('a')).toBe('A.');
  });
});
