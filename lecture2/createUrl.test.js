import { createUrl } from './createUrl';

describe('createUrl', () => {
  test('should replace {id} with 0', () => {
    const result = createUrl('/api/{id}', {id: 0});

    expect(result).toBe('/api/0');
  });

  test('should replace {id} with undefined', () => {
    const result = createUrl('/api/{id}', {name: 'Petya'});

    expect(result).toBe('/api/undefined');
  });

  test('should replace {list} with items and {id} with 0', () => {
    const result = createUrl('/api/{list}/{id}', {
      list: 'items', id: 0,
    });

    expect(result).toBe('/api/items/0');
  });
});