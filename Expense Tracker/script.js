"use strict";

let expenses = [];
//selectors

const nameInput = document.querySelector("#name-input");
const amountInput = document.querySelector("#number-input");
const dateInput = document.querySelector("#date-input");
const addBtn = document.querySelector(".add-expense-btn");
const expenseData = document.querySelector(".expense-data");

addBtn.addEventListener("click", function () {
  const expenseName = nameInput.value.trim();
  const amount = Number(amountInput.value.trim());
  const date = dateInput.value.trim();

 
  // input validation
  if (nameInput === "" || amountInput === "" || dateInput === "") {
    alert("Please fill all the fields");
    return;
  }

  if (isNaN(amountInput) || amountInput <= 0) {
    alert("Please enter a valid amount");
    return;
  }

 console.log(expenseName, amountInput, date);
});
