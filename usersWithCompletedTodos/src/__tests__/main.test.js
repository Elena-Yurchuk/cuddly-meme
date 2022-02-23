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
  describe('when API is successful', () => {
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

  describe('when API Throws Errors', () => {
    test('get fails', async() => {
      const errorMessage = 'Network Error';

      fetch.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      );

      await expect(getUsersWithCompletedTodos()).rejects.toThrow(errorMessage);
    });
  });
});