import { invertColor } from './invertColor';

describe('invertColor', () => {
  test('should return #ffffff after inverting #000000', () => {
    const result = invertColor('#000000');

    expect(result).toBe('#ffffff');
  });

  test('should return #221155 after inverting #DDEEAA', () => {
    const result = invertColor('#DDEEAA');

    expect(result).toBe('#221155');
  });

  test('should return #fedcba after inverting #012345', () => {
    const result = invertColor('#012345');

    expect(result).toBe('#fedcba');
  });
});