let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__cross');
let editButton = document.querySelector('.profile__edit-button');
let form = document.querySelector('.popup__form');
let title = document.querySelector('.profile__heading');
let subtitle = document.querySelector('.profile__description');
let nameField = document.querySelector('.popup__item-title');
let jobField = document.querySelector('.popup__item-subtitle');

// функция показатьВсплывающееОкно
function showPopup() {
  popup.classList.add('popup_opened');
}

editButton.addEventListener ('click', showPopup)

function closePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener ('click', closePopup)

function submitForm(event) {
  event.preventDefault();
  title.textContent = nameField.value;
  subtitle.textContent = jobField.value;
}

form.addEventListener ('submit', submitForm)
