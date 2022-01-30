import { calculateRentalCost } from './calculate-rental-cost';

describe('calculateRentalCost', () => {
  test('should return 80 as the rental cost of two days. ', () => {
    const result = calculateRentalCost(2);

    expect(result).toBe(80);
  });

  test('should return 100 as the rental cost of three days, as if you rent the car for 3 or more days, you get $20 off your total', () => {
    const result = calculateRentalCost(3);

    expect(result).toBe(100);
  });

  test('should return 230 as the rental cost of three days, as if you rent the car for 7 or more days, you get $50 off your total', () => {
    const result = calculateRentalCost(7);

    expect(result).toBe(230);
  });
});