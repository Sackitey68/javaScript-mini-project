const form = document.querySelector(".add");
const incomeDom = document.querySelector("ul.income-list");
const expenseDom = document.querySelector("ul.expense-list");
const balance = document.querySelector("#balance");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");

//Check if the local storage has transactions saved
let transactions =
  localStorage.getItem("transactions") !== null
    ? JSON.parse(localStorage.getItem("transactions"))
    : [];

function template(id, source, amount, time) {
  return ` <li data-id=${id}>
                 <p>
                    <span>${source}</span>
                    <span id="time">${time}</span>
                 </p>
                     $<span>${Math.abs(amount)}</span>
                     <i class="bi bi-trash delete"></i>
                </li>`;
}

// check whether its an expense or income
function transactionsDom(id, source, amount, time) {
  if (amount > 0) {
    incomeDom.innerHTML += template(id, source, amount, time);
  } else {
    expenseDom.innerHTML += template(id, source, amount, time);
  }
}

// getTransaction from the local Storage
function getTransaction() {
  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      incomeDom.innerHTML += template(
        transaction.id,
        transaction.source,
        transaction.amount,
        transaction.time
      );
    } else {
      expenseDom.innerHTML += template(
        transaction.id,
        transaction.source,
        transaction.amount,
        transaction.time
      );
    }
  });
}


// validity check
function addTransaction(source, amount) {
  if (!source || isNaN(amount) || amount === 0) {
    return alert("Enter a valid source and amount");
  }
  const time = new Date();
  const transaction = {
    id: Math.floor(Math.random() * 100000),
    source: source,
    amount: amount,
    time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`,
  };

  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  transactionsDom(
    transaction.id,
    transaction.source,
    transaction.amount,
    transaction.time
  );
  updateStatistics();
}


// submit handler
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const source = form.source.value.trim();
  const amount = Number(form.amount.value);
  addTransaction(source, amount);
  form.reset();
});

// functionality to delete transactions
function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => {
    return transaction.id !== id;
  });
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

incomeDom.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    deleteTransaction(Number(event.target.parentElement.dataset.id));
    updateStatistics();
  }
});

expenseDom.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    deleteTransaction(Number(event.target.parentElement.dataset.id));
    updateStatistics();
  }
});

// Statistics in the Dom
function updateStatistics() {
  const incomeTotal = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => (total += transaction.amount), 0);

  const expenseTotal = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => (total += Math.abs(transaction.amount)), 0);

  income.textContent = incomeTotal;
  expense.textContent = expenseTotal;
  balance.textContent = incomeTotal - expenseTotal;
}

function init() {
  updateStatistics();
  getTransaction();
}

init();
