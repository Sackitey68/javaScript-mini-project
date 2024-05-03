'use strict';

const modal = document.querySelector('.modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// This function opens the Modal window
const showModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// This function closes the Modal window
const closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// This function listens to click event on the show modal buttons
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModalWindow);
}

closeModal.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

// This function listens to Escape key being pressed and closes the modal window
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
  }
});
