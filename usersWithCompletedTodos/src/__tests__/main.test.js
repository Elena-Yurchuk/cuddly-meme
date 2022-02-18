import { getUsersWithCompletedTodos } from '../scripts/main';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('getUsersWithCompletedTodos', () => {
  const users = [
    {
      id: 7, name: 'Elena',
    },
  ];

  const todos = [
    {
      userId: 7,
      title: 'delectus aut autem',
      id: 1,
      completed: true,
    },
  ];

  test('getUsersWithCompletedTodos', async() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({data: users}),
    }));
    

    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve({ data: todos}),
    }));

    const result = await getUsersWithCompletedTodos();

    expect(result).toEqual([{
      id: 7, name: 'Elena', todos:[],
    }]);
  });
});