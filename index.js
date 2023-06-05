const todoList = document.getElementById("todoList");
const newTodo = document.getElementById("newTodo");

let todos = [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${todo}</span>
      <button class="edit" onclick="editTodo(${index})">Edit</button>
      <button onclick="deleteTodo(${index})">Delete</button>`;
    todoList.appendChild(li);
  });
}

function addTodo() {
  if (newTodo.value !== "") {
    todos.push(newTodo.value);
    newTodo.value = "";
    renderTodos();
  }
}

function editTodo(index) {
  const todo = todos[index];
  const updatedTodo = prompt("Enter updated todo:", todo);
  if (updatedTodo !== null) {
    todos[index] = updatedTodo;
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

renderTodos();
