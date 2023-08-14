'use strict';

// * variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// * functions
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// * opening modal by clicking the Button
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// * closing modal by hitting on the Cross/Cancel button or By clicking any where on the page
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// * closing modal with the ESC key
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Escape was pressed');
    closeModal();
  }
});
