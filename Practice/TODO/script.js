const todoList = ["make dinner", "wash dishes"];
const addElement = document.querySelector(".js-add-button");

addElement.addEventListener("click", () => {
  const todoElement = document.querySelector(".js-input");
  const event = todoElement.value;

  // push to array
  todoList.push(event);

  // clear input
  todoElement.value = "";

  renderTodo();
});

function renderTodo() {
  const container = document.querySelector(".js-render");
  container.innerHTML = "";

  todoList.forEach((todo, index) => {
    container.innerHTML += `<p>${index + 1}. ${todo}</p>`;
  });
}
