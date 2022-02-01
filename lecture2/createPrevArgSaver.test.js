import { createPrevArgSaver } from './createPrevArgSaver';

describe('createPrevArgSaver', () => {
  test('should return function', () => {
    const result = createPrevArgSaver();

    expect(typeof result).toBe('function');
  });

  test('should return underfined', () => {
    const result = createPrevArgSaver();

    expect(result(123)).toBe(undefined);
    expect(result(456)).toBe(123);
    expect(result(100, 200, 300)).toBe(456);
    expect(result()).toBe(100);
    expect(result(741)).toBe(undefined);
  });
});
