const eyeIcon = document.getElementById("eye-icon");
const password = document.getElementById("password");
const strength = document.querySelector(".strength");
const message = document.querySelector(".message");

eyeIcon.addEventListener("click", function () {
  // Check the current type of the password input field and toggle it
  
  if (password.type === "password") {
    password.type = "text"; //Show the password
    eyeIcon.setAttribute("name", "eye-outline"); // Change the eye icon to indicate visibility
  } else {
    password.type = "password"; // Hide the password
    eyeIcon.setAttribute("name", "eye-off-outline");
  }
});

password.addEventListener("input", function () {
  const passwordValue = password.value;
  const passwordLength = passwordValue.length;

  let strengthMessage = ""; // Initialize a variable to store the strength message

  // If the password length is 0, hide the message container and exit the function
  if (passwordLength === 0) {
    message.style.display = "none";
    return;
  }

  // Determine the strength of the password based on its length and set the corresponding message and color
  if (passwordLength < 6) {
    strengthMessage = "Weak";
    strength.style.color = "red";
  } else if (passwordLength < 10) {
    strengthMessage = "Medium";
    strength.style.color = "#fff";
  } else {
    strengthMessage = "Strong";
    strength.style.color = "green";
  }

  // Display the message container and set the text content to the strength message
  message.style.display = "block";
  strength.textContent = strengthMessage;
});
