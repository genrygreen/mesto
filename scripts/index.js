let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__cross');
let editButton = document.querySelector('.profile__edit-button');
let form = document.querySelector('.popup__form');
let title = document.querySelector('.profile__heading');
let subtitle = document.querySelector('.profile__description');
let nameField = document.querySelector('.popup__item_title');
let jobField = document.querySelector('.popup__item_subtitle');

function showPopup() {
  popup.classList.add('popup_opened');
  nameField.value = title.textContent;
  jobField.value = subtitle.textContent;
}


function closePopup() {
  popup.classList.remove('popup_opened');
}


function submitForm(event, ) {
  event.preventDefault();
  title.textContent = nameField.value;
  subtitle.textContent = jobField.value;
  closePopup()
}

editButton.addEventListener ('click', showPopup)
popupCloseButton.addEventListener ('click', closePopup)
form.addEventListener ('submit', submitForm)
