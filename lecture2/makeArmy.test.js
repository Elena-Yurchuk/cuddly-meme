import { makeArmy } from './makeArmy';

describe('makeArmy', () => {
  test('should return 0', () => {
    const result = makeArmy(10);

    expect(result[0]()).toBe(0);
  }); 

  test('should return 5', () => {
    const result = makeArmy(10);

    expect(result[5]()).toBe(5);
  }); 

  test('should return 9', () => {
    const result = makeArmy(10);

    expect(result[9]()).toBe(9);
  }); 
});