import * as axios from 'axios';
import { getUsersWithPostsAndComments } from  '../scripts/main';

jest.mock('axios');

beforeEach(() => {
  axios.mockClear();
});

describe('getUsersWithPostsAndComments', () => {
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
  // const users = [
  //   {
  //     address: {
  //       street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
  //         lat: '-37.3159', lng: '81.1496',
  //       },
  //     },
  //     company: {
  //       name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets',
  //     },
  //     email: 'mailto:Sincere@april.biz',
  //     id: 1,
  //     name: 'Leanne Graham',
  //     phone: 'tel:17707368031 x56442',
  //     username: 'Bret',
  //     website: 'http://hildegard.org',
  //   },
  // ];

  // const posts = [
  //   {
  //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam',
  //     id: 1,
  //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  //     userId: 1,
  //   },
  // ];

  // const comments = [
  //   {
  //     body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus',
  //     email: 'mailto:Eliseo@gardner.biz',
  //     id: 1,
  //     name: 'id labore ex et quam laborum',
  //     postId: 1,
  //   },
  // ];

  test('axios should be called three times', async() => {
    axios.get.mockResolvedValue({data: users});
    axios.get.mockResolvedValue({data: posts});
    axios.get.mockResolvedValue({data: comments});

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
    axios.get.mockResolvedValue({data: users});
    axios.get.mockResolvedValue({data: posts});
    axios.get.mockResolvedValue({data: comments});

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
    // [
    // {
    //   address: {
    //     street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
    //       lat: '-37.3159', lng: '81.1496',
    //     },
    //   },
    //   company: {
    //     name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets',
    //   },
    //   email: 'mailto:Sincere@april.biz',
    //   id: 1,
    //   name: 'Leanne Graham',
    //   phone: 'tel:17707368031 x56442',
    //   username: 'Bret',
    //   website: 'http://hildegard.org',
    //   posts: [{
    //     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam',
    //     id: 1,
    //     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    //     userId: 1,
    //     comments: [{
    //       body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus',
    //       email: 'mailto:Eliseo@gardner.biz',
    //       id: 1,
    //       name: 'id labore ex et quam laborum',
    //       postId: 1,
    //     }],
    //   }],
    // }]);
  });

  test('if no match user with posts and comments then object of user should contain key posts with empty array', async() => {
    axios.get.mockResolvedValue({data: {
      id: 1, 
      name: 'Elena', 
    }});
    axios.get.mockResolvedValue({data: posts});
    axios.get.mockResolvedValue({data: comments});
    // axios.mockImplementationOnce(() => Promise.resolve({data: [
    //   {
    //     id: 1, 
    //     name: 'Elena', 
    //     address: {
    //       street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {
    //         lat: '-37.3159', lng: '81.1496',
    //       },
    //     },
    //     company: {
    //       name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets',
    //     },
    //     email: 'mailto:Sincere@april.biz',
    //     id: 1,
    //     name: 'Leanne Graham',
    //     phone: 'tel:17707368031 x56442',
    //     username: 'Bret',
    //     website: 'http://hildegard.org',
    //   },
    // ]}));
    // axios.mockImplementationOnce(() => Promise.resolve({data: posts}));
    // axios.mockImplementationOnce(() => Promise.resolve({data: comments}));

    const result = await getUsersWithPostsAndComments();

    expect(result).toEqual([
      {
        id: 1, 
        name: 'Elena',
        posts,
      
      },
    ]);
  });
});