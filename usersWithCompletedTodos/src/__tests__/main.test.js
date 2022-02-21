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

  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(users),
    }));
    

    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(todos),
    }));

  });

  test('getUsersWithCompletedTodos', async() => {
    const result = await getUsersWithCompletedTodos();

    expect(result).toEqual([{
      id: 7, name: 'Elena', todos,
    }]);
  });

  test('fetch should be called twice', async() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(users),
    }));
    

    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(todos),
    }));
    
    await getUsersWithCompletedTodos();

    expect(fetch).toHaveBeenCalledTimes(2);

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
    );
  });
});