import { createAdder } from './createAdder';

describe('createAdder', () => {
  const adder1 = createAdder();

  test('should return 0', () => {

    expect(adder1()).toBe(0);
  });

  test('should return 30', () => {

    expect(adder1(10, 20)).toBe(30);
  });

  test('should return 100', () => {

    expect(adder1(30, 40)).toBe(100);
  });

  const adder2 = createAdder(100);

  test('should return 110', () => {

    expect(adder2(10)).toBe(110);
  });

  test('should return 200', () => {

    expect(adder2(20, 30, 40)).toBe(200);
  });

  test('should return 200', () => {

    expect(adder2()).toBe(200);
  });
});