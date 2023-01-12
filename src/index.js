document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const textBox = document.querySelector("#new-task-description");
    const textBoxValue = textBox.value;
    const list = document.querySelector("#tasks");
    const newListItem = document.createElement("li");
    newListItem.textContent = textBoxValue;
    list.append(newListItem);
    textBox.value = null;
    console.log(textBoxValue);
  })
});
