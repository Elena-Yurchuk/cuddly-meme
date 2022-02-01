import { reverseWords } from './reverseWords';

describe('reverseWords', () => {
  test('should reverse string double  spaces to string elbuod  secaps', () => {
    const result = reverseWords('double  spaces');

    expect(result).toBe('elbuod  secaps');
  });

  test('should reverse string The quick brown fox jumps over the lazy dog. to string ehT kciuq nworb xof spmuj revo eht yzal .god', () => {
    const result = reverseWords('The quick brown fox jumps over the lazy dog.');

    expect(result).toBe('ehT kciuq nworb xof spmuj revo eht yzal .god');
  });
});