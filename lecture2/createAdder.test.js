import { createAdder } from './createAdder';

describe('createAdder', () => {
  test('should return 0', () => {
    const result = createAdder();

    expect(result()).toBe(0);
  });

  test('should return 30', () => {
    const result = createAdder();

    expect(result(10, 20)).toBe(30);
  });

  test('should return 100', () => {
    const result = createAdder(30);

    expect(result(30, 40)).toBe(100);
  });

  test('should return 110', () => {
    const result = createAdder(100);

    expect(result(10)).toBe(110);
  });

  test('should return 200', () => {
    const result = createAdder(110);

    expect(result(20, 30, 40)).toBe(200);
  });

  test('should return 200', () => {
    const result = createAdder(200);

    expect(result()).toBe(200);
  });
});