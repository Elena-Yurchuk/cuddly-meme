import { } from 'dotenv/config';

export const getUsersWithCompletedTodos = async() => {
  try {
    const [usersRes, todosRes] = await Promise.all([
      fetch(process.env.USERS_ENDPOINT),
      fetch(process.env.TODOS_ENDPOINT),
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
  } catch (error) {
    throw new Error ('Network Error');
  }
};

(async() => {
  await getUsersWithCompletedTodos(); 
});
