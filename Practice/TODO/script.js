const todoList = [];
displayTodo();
function displayTodo() {
  let todoHTML = " ";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;

    todoHTML += html;

    document.querySelector(".js-display-todo").innerHTML = todoHTML;
  }
}

function addItem() {
  const todoInputElement = document.querySelector(".js-input-todo");
  const todo = todoInputElement.value;
  todoList.push(todo);
  console.log(todoList);
  displayTodo();
  todoInputElement.innerHTML = "";
}
