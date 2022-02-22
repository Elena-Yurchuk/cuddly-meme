import axios from 'axios';
import { } from 'dotenv/config';

export const getUsersWithPostsAndComments = async() => {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      axios.get(process.env.USERS_ENDPOINT),
      axios.get(process.env.POSTS_ENDPOINT),
      axios.get(process.env.COMMENTS_ENDPOINT),
    ]);
      
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
