'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when no input is received
  if (!guess) {
    displayMessage();
    document.querySelector('.message').textContent = '🚫 No Number Typed';
  }

  // when number is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆 Correct Number';
    displayMessage('🏆 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Capturing the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high' : '📉 Too low';

        displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '⛔ You lost';
      displayMessage('⛔ You lost');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});


//   else if (score > 1) {
//     if (guess > secretNumber) {
//       document.querySelector('.message').textContent = '📈 Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else if (guess < secretNumber) {
//       document.querySelector('.message').textContent = '📉 Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else {
//     // document.querySelector('.message').textContent = '⛔ You lost';
//     displayMessage('⛔ You lost');
//     document.querySelector('.score').textContent = 0;
//     document.querySelector('body').style.backgroundColor = '#FF0000';
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
