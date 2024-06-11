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
  if (expenseName === "" || amount === "" || date === "") {
    alert("Please fill all the fields");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  //add expense to the array
  const expense = { name: expenseName, amount, date };
  expenses.push(expense);
  console.log(expenses);

  displayExpenses();
  // Clear input fields
  nameInput.value = "";
  amountInput.value = "";
  dateInput.value = "";
});

function displayExpenses() {
  expenseData.innerHTML = expenses
    .map(
      (expense) => `
       <div class="flex">
      <p class="expense-history">${expense.name} - $${expense.amount.toFixed(
        2
      )} - ${expense.date}</p> 
       <span><button class="btn-delete">X</button></span>
       </div>
    `
    )
    .join("");
}
