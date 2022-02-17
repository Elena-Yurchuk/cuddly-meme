import axios from 'axios';
import { getUsersWithPostsAndComments } from  '../scripts/main';

jest.mock('axios');

beforeEach(() => {
  axios.mockClear();
});

describe('getUsersWithPostsAndComments', () => {
  const users = [
    {
      address: {
        street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
          lat: '-37.3159', lng: '81.1496',
        },
      },
      company: {
        name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets',
      },
      email: 'mailto:Sincere@april.biz',
      id: 1,
      name: 'Leanne Graham',
      phone: 'tel:17707368031 x56442',
      username: 'Bret',
      website: 'http://hildegard.org',
    },
  ];

  const posts = [
    {
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam',
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      userId: 1,
    },
  ];

  const comments = [
    {
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus',
      email: 'mailto:Eliseo@gardner.biz',
      id: 1,
      name: 'id labore ex et quam laborum',
      postId: 1,
    },
  ];

  test('axios should be called three times', async() => {
    axios.mockImplementationOnce(() => Promise.resolve({data: users}));
    axios.mockImplementationOnce(() => Promise.resolve({data: posts}));
    axios.mockImplementationOnce(() => Promise.resolve({data: comments}));

    await getUsersWithPostsAndComments();

    expect(axios).toHaveBeenCalledTimes(3);

    expect(axios).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(axios).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
    );

    expect(axios).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments',
    );
  });

  test('should return merged array', async() => {
    axios.mockImplementationOnce(() => Promise.resolve({data: users}));
    axios.mockImplementationOnce(() => Promise.resolve({data: posts}));
    axios.mockImplementationOnce(() => Promise.resolve({data: comments}));

    const result = await getUsersWithPostsAndComments();

    expect(result).toEqual([{
      address: {
        street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
          lat: '-37.3159', lng: '81.1496',
        },
      },
      company: {
        name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets',
      },
      email: 'mailto:Sincere@april.biz',
      id: 1,
      name: 'Leanne Graham',
      phone: 'tel:17707368031 x56442',
      username: 'Bret',
      website: 'http://hildegard.org',
      posts: [{
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam',
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        userId: 1,
        comments: [{
          body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus',
          email: 'mailto:Eliseo@gardner.biz',
          id: 1,
          name: 'id labore ex et quam laborum',
          postId: 1,
        }],
      }],
    }]);
  });

  test('if no match user with posts and comments then object of user should contain key posts with empty array', async() => {
    axios.mockImplementationOnce(() => Promise.resolve({data: [{
      address: {
        street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
          lat: '-37.3159', lng: '81.1496',
        },
      },
      company: {
        name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets',
      },
      email: 'mailto:Sincere@april.biz',
      id: 1,
      name: 'Leanne Graham',
      phone: 'tel:17707368031 x56442',
      username: 'Bret',
      website: 'http://hildegard.org',
    }]}));
    axios.mockImplementationOnce(() => Promise.resolve({data: posts}));
    axios.mockImplementationOnce(() => Promise.resolve({data: comments}));

    const result = await getUsersWithPostsAndComments();

    expect(result).toEqual([{
      address: {
        street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
          lat: '-37.3159', lng: '81.1496',
        },
      },
      company: {
        name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets',
      },
      email: 'mailto:Sincere@april.biz',
      id: 1,
      name: 'Leanne Graham',
      phone: 'tel:17707368031 x56442',
      username: 'Bret',
      website: 'http://hildegard.org',
      posts: [],
    }]);
  });
});