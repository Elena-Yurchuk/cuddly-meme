import { openOrSenior } from './openOrSenior';

describe('openOrSenior', () => {
  test('should return Open passed [31, 10], Senior passed [55,23], Open passed [20, 0], Senior passed [41, 16]', () => {
    const result = openOrSenior([[31, 10],[55,23],[20, 0],[41, 16]]);

    expect(result).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
  });

  test('should return Open passed [34, 11], Open passed [55,7], Open passed [39, 16], Open passed [38, 14]', () => {
    const result = openOrSenior([[34, 11],[55,7],[39, 16],[38, 14]]);

    expect(result).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
  });
});