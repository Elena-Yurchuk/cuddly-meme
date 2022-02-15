import { axios } from 'axios';

const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';

const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

const commentsEndpoint = 'https://jsonplaceholder.typicode.com/comments';

const getUsersWithPostsAndComments = async() => {
  try {
    const usersRes = await axios.get(usersEndpoint);

    const postsRes = await axios.get(postsEndpoint);

    const commentsRes = await axios.get(commentsEndpoint);

    const users = usersRes.data;

    const posts = postsRes.data;

    const comments = commentsRes.data;

    const allUsers = users.map((user) => {
      return {
        ...user,
        posts: posts
          .filter((post) => user.id === post.userId)
          .map((post) => ({
            ...post,
            comments: comments
              .filter((comment) => post.id === comment.postId),
          })),
      };
    });

    return allUsers;
  } catch (error) {
    throw new Error ('Error');
  }
};

getUsersWithPostsAndComments();