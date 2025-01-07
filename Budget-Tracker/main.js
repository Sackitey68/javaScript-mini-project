const form = document.querySelector(".add");

//Check if the local storage has transactions saved
let transactions = localStorage.getItem("transactions") !== null ? JSON.parse(localStorage.getItem("transactions")) : [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const transaction = {
    source: form.source.value,
    amount: form.amount.value,
  };

  transactions.push(transaction);
  localStorage.setItem("transactions", JSON.stringify(transactions));
});

