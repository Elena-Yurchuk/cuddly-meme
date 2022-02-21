// const dotenv = require('dotenv');

// dotenv.config();

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const TODOS_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

export const getUsersWithCompletedTodos = async() => {
  const [usersRes, todosRes] = await Promise.all([
    fetch(USERS_ENDPOINT),
    fetch(TODOS_ENDPOINT),
  ]);

  const todos = await todosRes.json();

  const users = await usersRes.json();

  const allUsers = users.map((user) => {
    return {
      ...user,
      todos: todos
        .filter((todo) => user.id === todo.userId && todo.completed),   
    };
  });

  return allUsers;
};
 
(async() => {
  await getUsersWithCompletedTodos(); 
});
