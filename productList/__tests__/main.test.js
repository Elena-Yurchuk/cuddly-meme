import { sortedListOfProducts } from '../scripts/main';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

// jest.mock('axios');

// beforeEach(() => {
//   axios.mockClear();
// });

describe('sortedListOfProducts', () => {
  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([{category: 'b'}, {category: 'a'}]),
    }));
  });

  test('sortedListOfProducts', async() => {
    const result = await sortedListOfProducts();

    expect(result).toEqual([{category: 'a'}, {category: 'b'}]);
  });

  test('fetch should be called once with https://fakestoreapi.com/products', async() => {
    await sortedListOfProducts();

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products');
  });
});