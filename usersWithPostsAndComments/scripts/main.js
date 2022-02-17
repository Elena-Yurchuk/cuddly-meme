import axios from 'axios';

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

const COMMENTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/comments';

export const getUsersWithPostsAndComments = async() => {
  try {
    const usersRes = await axios.get(USERS_ENDPOINT);

    const postsRes = await axios.get(POSTS_ENDPOINT);

    const commentsRes = await axios.get(COMMENTS_ENDPOINT);

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
    throw new Error ('Network Error');
  }
};


(async() => {
  await getUsersWithPostsAndComments();
});