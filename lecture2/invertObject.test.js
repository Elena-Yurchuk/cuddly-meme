import { invertObject } from './invertObject';

describe('invertObject', () => {
  test('should return an empty object', () => {
    const result = invertObject({});

    expect(result).toStrictEqual({});
  });

  test('should swap foo and bar', () => {
    const result = invertObject({
      'foo': 'bar',
    });

    expect(result).toStrictEqual({'bar': 'foo'});
  });

  test('should swap 1 and 2, 4 and 2, 6 and 3', () => {
    const result = invertObject({
      '1': 2, '2': 4, '3': 6,
    });

    expect(result).toStrictEqual({
      '2': '1', '4': '2', '6': '3',
    });
  });

  test('should return null passed {"foo": "bar", "hello": "world", "js": "bar"}', () => {
    const result = invertObject({
      'foo': 'bar', 'hello': 'world', 'js': 'bar',
    });

    expect(result).toBe(null);
  });
});