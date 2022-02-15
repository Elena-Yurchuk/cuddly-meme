const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';

const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos';

const getUsersWithCompletedTodos = async () => {

  const usersRes = await fetch(usersEndpoint);

  const todosRes = await fetch(todosEndpoint);

  const todos = await todosRes.json();

  const users = await usersRes.json();

  const allUsers = users.map((user) => {
    return {
      ...user,
      todos: todos
        .filter((todo) => user.id === todo.userId)
        .filter((todo) => todo.completed === true),
    };
  });
}

getUsersWithCompletedTodos(); 