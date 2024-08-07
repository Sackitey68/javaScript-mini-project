// const value = document.querySelector(".count-value");
// const increaseButton = document.querySelector(".increase");
// const decreaseButton = document.querySelector(".decrease");
// const resetButton = document.querySelector(".reset");

// let updateValue = Number(value.textContent);

// increaseButton.addEventListener("click", function () {
//   value.textContent = updateValue += 1;
// });

// decreaseButton.addEventListener("click", function () {
//   value.textContent = updateValue -= 1;
// });

// resetButton.addEventListener("click", function () {
//   value.textContent = updateValue = 0;
// });

const value = document.querySelector(".count-value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let elementId = e.currentTarget.id;
    console.log(elementId);

    if (elementId === "decrease") {
      count--;
    } else if (elementId === "increase") {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;
    value.style.color = count > 0 ? "green" : count < 0 ? "red" : "";
  });
});
