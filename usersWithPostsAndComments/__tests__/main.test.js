import * as axios from 'axios';
import { getUsersWithPostsAndComments } from  '../scripts/main';

jest.mock('axios');

beforeEach(() => {
  axios.mockClear();
});

describe('getUsersWithPostsAndComments', () => {
  describe('when API call is successful', () => {
    const users = [
      {
        id: 1, name: 'Elena',
      },
    ];
  
    const posts = [
      {
        userId: 1, title: 'Test post', id: 1,
      },
    ];
  
    const comments = [
      {
        postId: 1, body: 'Comment test', id: 1,
      },
    ];
  
    test('axios should be called three times', async() => {
      axios.get.mockResolvedValueOnce({data: users});
      axios.get.mockResolvedValueOnce({data: posts});
      axios.get.mockResolvedValueOnce({data: comments});
  
      await getUsersWithPostsAndComments();
  
      expect(axios.get).toHaveBeenCalledTimes(3);
  
      expect(axios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users',
      );
  
      expect(axios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/posts',
      );
  
      expect(axios.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/comments',
      );
    });
  
    test('should return merged array', async() => {
      axios.get.mockImplementationOnce(() => Promise.resolve({data: users}));
      axios.get.mockImplementationOnce(() => Promise.resolve({data: posts}));
      axios.get.mockImplementationOnce(() => Promise.resolve({data: comments}));
  
      const result = await getUsersWithPostsAndComments();
  
      expect(result).toEqual([
        {
          id: 1, 
          name: 'Elena', 
          posts: [
            { 
              userId: 1, 
              title: 'Test post', 
              id: 1, 
              comments: [
                {
                  postId: 1, 
                  body: 'Comment test', 
                  id: 1,
                },
              ],
            },
          ],
        },
      ]);
    });
  
    test('if no match user with posts and comments then object of user should contain key posts with empty array', async() => {
      axios.get.mockResolvedValueOnce({data: [{
        id: 1, 
        name: 'Elena', 
      }]});
      axios.get.mockResolvedValueOnce({data: []});
      axios.get.mockResolvedValueOnce({data: []});
  
      const result = await getUsersWithPostsAndComments();
  
      expect(result).toEqual([
        {
          id: 1, 
          name: 'Elena',
          posts: [],
        
        },
      ]);
    });
  });

  describe('when API Throws Errors', () => {
    test('get fails', async() => {
      const errorMessage = 'Network Error';

      axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
      );

      await expect(getUsersWithPostsAndComments()).rejects.toThrow(errorMessage);
    });
  });
});
