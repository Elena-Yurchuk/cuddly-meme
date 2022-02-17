import { getUsersWithCompletedTodos } from '../scripts/main';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      json: () => Promise.resolve(),
    }),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('getUsersWithCompletedTodos', () => {
  const todos = [
    {
      userId: 7,
      title: 'delectus aut autem',
      id: 1,
      completed: true,
    },
  ];

  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({data: [{
        id: 7, name: 'Elena',
      }]}),
    }));
    

    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ data: todos}),
    }));
  });

  test('getUsersWithCompletedTodos', async() => {
    const result = await getUsersWithCompletedTodos();

    expect(result).toEqual([{
      id: 7, name: 'Elena', todos:[],
    }]);
  });
});