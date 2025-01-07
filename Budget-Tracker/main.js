const form = document.querySelector(".add");

let transactions = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const transaction = {
    source: form.source.value,
    amount: form.amount.value,
  };

  transactions.push(transaction);
});

console.log(transactions)
