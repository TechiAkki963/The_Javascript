const todoList = [];

task();

function task() {
  let taskListHTML = " ";

  for (i = 0; i < todoList.length; i++) {
    const task = todoList[i];
    const html = `<p>${task}</p>`;

    taskListHTML += html;
  }
  console.log(taskListHTML);

  document.querySelector(".js-task-item").innerHTML = taskListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  console.log(name);

  todoList.push(name);
  console.log(todoList);

  inputElement.value = " ";

  task();
}
