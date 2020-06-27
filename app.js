
const button = document.querySelector('#button1');

const header = document.querySelector('#colorChangingHeader');

button.addEventListener("click", handleHeaderButton);

function handleHeaderButton(event) {
    header.classList.toggle('newHeader');

}


// create a todo

// select the todo form
const form = document.querySelector(".form");
const todoList = document.querySelector("#todoList");

function renderTodoMarkup(name) {
  return `
      <span class="todo-text">${name}</span>
      <button class="complete-button">Complete</button>
      <button class="remove-button">Remove</button>
  `;
}

function bindTodoEventListeners(todo) {
  function removeTodo() {
    todo.remove();
  }

  const removeButton = todo.querySelector(".remove-button");
  removeButton.addEventListener("click", removeTodo);

  function completeTodo() {
    todo.classList.add("completed");
  }

  const completeButton = todo.querySelector(".complete-button");
  completeButton.addEventListener("click", completeTodo);
}

function createTodo(name) {
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo-item");

  newTodo.innerHTML = renderTodoMarkup(name);
  bindTodoEventListeners(newTodo);
  // const newTodo = document.createElement("div");
  // const todoText = document.createTextNode(name);
  // const removeButton = document.createElement("button");
  // const buttonText = document.createTextNode("remove");

  // removeButton.appendChild(buttonText);
  // // give it the appropriate class name
  // newTodo.classList.add("todo-item");
  // put this todoname value in it
  // newTodo.appendChild(todoText);
  // newTodo.appendChild(removeButton);

  return newTodo;
}

// listen for the form's submit event
function handleFormSubmit(event) {
  event.preventDefault();
  const todoNameInput = form.elements[0];
  const todoName = todoNameInput.value;

  if (!todoName.length) {
    return;
  }

  // make a new todo div
  const newTodo = createTodo(todoName);

  // append it to the list of todos
  todoList.appendChild(newTodo);

  // reset form value
  todoNameInput.value = "";
}

form.addEventListener("submit", handleFormSubmit);
