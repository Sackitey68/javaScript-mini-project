const tasks = document.querySelector(".tasks");

//functionality to delete tasks
tasks.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
