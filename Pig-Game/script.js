'use strict';

// Selecting the Element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let currentScore = 0;
let activePlayer = 0;

score0El.textContent = 0;
score1El.textContent = 0;

//Hide the dice when the game loads
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

//Rolling the Dice
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');

  // display the dice
  diceEl.src = `/assets/dice-${dice}.png`;

  //   check if dice face is not 1
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // Switching Player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 10;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
