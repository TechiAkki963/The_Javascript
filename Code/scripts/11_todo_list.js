const todoList = [];

task();

function task() {
  let taskListHTML = " ";

  for (i = 0; i < todoList.length; i++) {
    const taskObject = todoList[i];
    const { name, dueDate } = taskObject;

    const html = `<p>${name} ${dueDate}
    <button onclick="
    todoList.splice(${i},1)
    
    task()   // for rendering the data again
    ">Delete</button>
    </p>`;

    taskListHTML += html;
  }
  console.log(taskListHTML);

  document.querySelector(".js-task-item").innerHTML = taskListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  console.log(name);

  const inputDueDateElement = document.querySelector(".js-due-date-input");
  const dueDate = inputDueDateElement.value;
  console.log(dueDate);

  todoList.push({
    name: name,
    dueDate: dueDate,
    // can also be written as {name, duedate} shorthand
  });
  console.log(todoList);

  inputElement.value = " ";

  task();
}
