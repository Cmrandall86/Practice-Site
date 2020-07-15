//#region Color Chaning Header
const button = document.querySelector('#button1');

const header = document.querySelector('#colorChangingHeader');

button.addEventListener("click", handleHeaderButton);

function handleHeaderButton(event) {
    header.classList.toggle('newHeader');

}
//#endregion

//#region Todo List

// create a todo

// select the todo form
const form = document.querySelector(".form");
const todoList = document.querySelector("#todoList");

function renderTodoMarkup(name) {
  return `
      <span class="todo-text">${name}</span>
      <button class="complete-button">Complete</button>
      <button class="remove-button">Remove</button>
      <button class="edit-button">Edit</button>
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

  
  //need help with this
  function editTodo(){
    const inputBox = document.querySelector('#todo-description');
    const todoNameInput = form.elements[0];
    const todoName = todoNameInput.value;
    inputBox.textContent = todoName;
    todo.remove();
  }
  
  const editButton = todo.querySelector(".edit-button");
  editButton.addEventListener("click", editTodo)

}

function createTodo(name) {
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo-item");

  newTodo.innerHTML = renderTodoMarkup(name);
  bindTodoEventListeners(newTodo);
  
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

//#endregion


//const balance = prompt('how much money do you have?')


const calculatorForm = document.querySelector('.calculatorForm');
const balanceList = document.querySelector('.balanceList');

function showBalance(total) {
  const newBalance = document.createElement('div');
  newBalance.id = 'balance';
  newBalance.innerHTML = renderBalance(total);

  return newBalance;

};

function renderBalance(total) {
  return`
   <span class='renderedBalance'> ${total} </span>
   `
};

function handleBalanceSubmit(event) {
  event.preventDefault();
  const balanceInput = calculatorForm.elements[0];
  const balance = balanceInput.value;

  newBalance = showBalance(balance);
  balanceList.appendChild(newBalance);

};

calculatorForm.addEventListener('submit', handleBalanceSubmit);
