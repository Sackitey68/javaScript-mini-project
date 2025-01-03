const tasks = document.querySelector(".tasks");
const addForm = document.querySelector(".add");

//functionality to delete tasks
tasks.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
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
});
