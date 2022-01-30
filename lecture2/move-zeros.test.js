import { moveZeros } from './move-zeroz';

describe('moveZeros', () => {
  test('should return [false,1,1,2,1,3,"a",0,0] moved all zeros to the end', () => {
    const result = moveZeros([false,1,0,1,2,0,1,3,'a']);

    expect(result).toStrictEqual([false,1,1,2,1,3,'a',0,0]);
  });
});