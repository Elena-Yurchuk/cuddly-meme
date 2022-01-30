import { fearNotLetter } from './fear-not-letter'; 

describe('fearNotLetter', () => {
  test('should return letter d passed a string abce', () => {
    const result = fearNotLetter('abce');

    expect(result).toBe('d');
  });

  test('should return letter i passed a string abcdefghjklmno', () => {
    const result = fearNotLetter('abcdefghjklmno');

    expect(result).toBe('i');
  });

  test('should return letter u passed a string stvwx', () => {
    const result = fearNotLetter('stvwx');

    expect(result).toBe('u');
  });

  test('should return letter undefined passed a string abcdefghijklmnopqrstuvwxyz', () => {
    const result = fearNotLetter('abcdefghijklmnopqrstuvwxyz');

    expect(result).toBe(undefined);
  });
});