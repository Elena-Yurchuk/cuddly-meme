const listOfUsers = document.getElementById('usersList');
const listOfUserNames = document.createElement('ol');
const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';
const todosEndpoint = 'https://jsonplaceholder.typicode.com/todos';

async function getUsers() {
  try {
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
  
    getUsersWithCompletedTodos(allUsers);
  } catch (error) {
    throw new Error ('Error');
  }
  

}

getUsers();

const getUsersWithCompletedTodos = (allUsers) => {
  for (const item of allUsers) {
    const userName = document.createElement('li');

    userName.innerHTML = `${item.name}`;

    listOfUserNames.appendChild(userName);

    const userTodos = item.todos;
    const listOfUserTodos = document.createElement('ul');

    userTodos.map((todo) => {
      const title = document.createElement('li');

      title.innerHTML = `${todo.title}`;
      listOfUserTodos.appendChild(title);

    });
    userName.appendChild(listOfUserTodos);
  }
};

listOfUsers.appendChild(listOfUserNames);


listOfUsers.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'LI') {
    return;
  }
  
  const childrenContainer = ev.target.querySelector('ul');
  
  if (!childrenContainer) {
    return;
  }
  
  childrenContainer.hidden = !childrenContainer.hidden;
});
  