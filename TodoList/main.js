const tasks = document.querySelector(".tasks");
const addForm = document.querySelector(".add");
const message = document.querySelector(".message");
const clearAll = message.querySelector(".clear");

// functionality to update footer counts
function updateMessage() {
  const value = tasks.children.length;
  if (value <= 1) {
    message.querySelector("span").textContent = `You have ${value} task`;
  } else {
    message.querySelector("span").textContent = `You have ${value} tasks`;
  }
}
updateMessage();

//functionality to delete tasks
tasks.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    updateMessage();
  }
});

//functionality to add Task
addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  addTask = addForm.task.value.trim();
  if (addTask.length) {
    tasks.innerHTML += ` <li>
                        <span>${addTask}</span> <i class="bi bi-trash-fill delete"></i>
                     </li>`;
  }
  addForm.reset();
  updateMessage();
});

clearAll.addEventListener("click", function () {
  tasks.querySelectorAll("li").forEach((item) => item.remove());
  updateMessage();
});
