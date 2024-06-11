"use strict";

let expenses = [];
let total = 0;

//selectors
const nameInput = document.querySelector("#name-input");
const amountInput = document.querySelector("#number-input");
const dateInput = document.querySelector("#date-input");
const addBtn = document.querySelector(".add-expense-btn");
const expenseData = document.querySelector(".expense-data");
const totalDisplay = document.querySelector(".total");

// Load expenses from local storage
loadExpenses();

addBtn.addEventListener("click", function () {
  const expenseName = nameInput.value.trim();
  const amount = Number(amountInput.value.trim());
  const date = dateInput.value.trim();

  // input validation
  if (expenseName === "" || amountInput.value.trim() === "" || date === "") {
    alert("Please fill all the fields");
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  //add expense to the array
  // Update total
  total += amount;

  const expense = { name: expenseName, amount, date };
  expenses.push(expense);

  // Save expenses to local storage
  saveExpenses();

  displayExpenses();
  // Clear input fields
  nameInput.value = "";
  amountInput.value = "";
  dateInput.value = "";

  updateTotal();
});

function displayExpenses() {
  // Sort expenses by date in ascending order
  expenses.sort((a, b) => new Date(a.date) - new Date(b.date));

  expenseData.innerHTML = expenses
    .map(
      (expense, index) => `
       <div class="flex">
      <p class="expense-history">${expense.name} - $${expense.amount.toFixed(
        2
      )} - ${expense.date}</p> 
       <span><button class="btn-delete" data-index="${index}">X</button></span>
       </div>
    `
    )
    .join("");

  // Add event listeners to delete buttons
  document.querySelectorAll(".btn-delete").forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      deleteExpense(index);
    });
  });
}

function deleteExpense(index) {
  total -= expenses[index].amount;
  expenses.splice(index, 1);

  // Save expenses to local storage
  saveExpenses();

  displayExpenses();
  updateTotal();
}

function updateTotal() {
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpenses() {
  const storedExpenses = localStorage.getItem("expenses");
  if (storedExpenses) {
    expenses = JSON.parse(storedExpenses);
    total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    displayExpenses();
    updateTotal();
  }
}
