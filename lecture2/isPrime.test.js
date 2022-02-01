import { isPrime } from './isPrime';

describe('isPrime', () => {
  test('should return true passed 2', () => {
    const result = isPrime(2);

    expect(result).toBeTruthy();
  });

  test('should return true passed 73', () => {
    const result = isPrime(73);

    expect(result).toBeTruthy();
  });

  test('should return false passed 1', () => {
    const result = isPrime(1);

    expect(result).toBeFalsy();
  });

  test('should return false passed 75', () => {
    const result = isPrime(75);

    expect(result).toBeFalsy();
  });

  test('should return false passed -1', () => {
    const result = isPrime(-1);

    expect(result).toBeFalsy();
  });
});