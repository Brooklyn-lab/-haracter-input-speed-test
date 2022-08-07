//---------Loader----------
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

// Theme

const themeButton = document.querySelector('.theme');
const body = document.querySelector('body');

themeButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

// Burger menu

const burgerButton = document.querySelector('.burger');
const header = document.querySelector('.header');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  body.classList.toggle('hidden');
  header.classList.toggle('show');
});

//

const dropListButton = document.querySelector('#dropItem');
const dropList = document.querySelector('.header__drop-list');

dropListButton.addEventListener('click', () => {
  dropList.classList.toggle('show');
});

document.addEventListener('click', function (evt) {
  const withinBoundaries = evt.composedPath().includes(dropListButton);

  if (!withinBoundaries) {
    dropList.classList.remove('show');
  }
});

//

const field = document.querySelector('.field');
const fieldTypeToText = document.querySelector('.field__text-to-type');
const buttonUpdateField = document.querySelector('.update-btn');

const textToType = 'dffdfd dffdfd dffdfd dffdfd dffdfd';
let copyText = textToType.split('');
let rightString = [];

function viewUpdate(viewElem, viewText) {
  if (typeof viewText === 'string') {
    viewElem.innerText = viewText;
  } else if (typeof viewText === 'object') {
    viewElem.innerText = viewText.join('');
  }
}

// document.querySelector('#fix-input').focus();

viewUpdate(fieldTypeToText, copyText);

fieldTypeToText.focus();

document.addEventListener('keyup', function (evt) {
  evt.preventDefault();
  const keyup = evt.key;
  if (copyText[0]) {
    if (keyup.toLowerCase() === copyText[0].toLowerCase()) {
      rightString.push(...copyText.splice(0, 1));
      viewUpdate(fieldTypeToText, copyText);
    }
  }
});

buttonUpdateField.addEventListener('click', (evt) => {
  evt.preventDefault();
  viewUpdate(fieldTypeToText, textToType);
  copyText = textToType.split('');
  rightString = [];
});
