const eyeIcon = document.getElementById("eye-icon");
const password = document.getElementById("password");

eyeIcon.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.setAttribute("name", "eye-outline");
  } else {
    password.type = "password";
    eyeIcon.setAttribute("name", "eye-off-outline");
  }
});
