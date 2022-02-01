import { squareList } from './squareList';

describe('squareList', () => {
  test('should return [16, 1764, 36] passed [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]', () => {
    const result = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);

    expect(result).toStrictEqual([16, 1764, 36]);
  });

  test('should return [9, 100, 49] passed [-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]', () => {
    const result = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);

    expect(result).toStrictEqual([9, 100, 49]);
  });
});