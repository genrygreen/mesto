const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Переменные из 4-го спринта. Не стал их описывать 🥴
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__cross');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const form = document.querySelector('.popup__form');
const title = document.querySelector('.profile__heading');
const subtitle = document.querySelector('.profile__description');
const nameField = document.querySelector('.popup__item_type_title');
const jobField = document.querySelector('.popup__item_type_subtitle');

const popupProfile = document.querySelector('.popup-profile'); // Попап профайла
const popupPlace = document.querySelector('.popup-place'); // Попап места
const closePlace = popupPlace.querySelector('.popup__cross'); // Крсетик попапа добавления метса
const closeBigPic = document.querySelector('.popup__cross_big-place'); // Крестик попапа большой картинки
const inputPlace = document.querySelector('.popup__item_place-title'); // Обращение к имени метса
const inputLink = document.querySelector('.popup__item_place-link'); // Обращение к ссылке
const createNewCard = document.querySelector('.popup__form-place'); // Обращение к форме попапа метса
const itemTemplate = document.querySelector('#template-item').content; // Коробка с шаблоном
const places = document.querySelector('.elements'); // Секция для карточек
const elementsTitle = document.querySelector('.elements__title'); // Обращение к заголовку карточки
const elementsPhoto = document.querySelector('.elements__photo'); // Обращение к фото карточки
const popupBigPic = document.querySelector('.popup-big-place'); // Попап с большой картинкой
const bigPicTitle = document.querySelector('.popup__big-place-title'); // Подпись к попапу с большой картинкой
const bigPic = document.querySelector('.popup__big-place-pic'); // Большая картинка на попапе

// Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Открытие попапа профиля
function showProfilePopup() {
  nameField.value = title.textContent;
  jobField.value = subtitle.textContent;
  openPopup(popupProfile);
}

// Сохранение введёной информации в попапе профиля
function submitForm(event) {
  event.preventDefault();
  title.textContent = nameField.value;
  subtitle.textContent = jobField.value;
  closePopup(popupProfile);
}

// Открытие попапа добавления места
function showPlacePopup() {
  inputPlace.value = '',
  inputLink.value = ''
  openPopup(popupPlace);
}

// Закрытие попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}

// Закрытие попапа c большой картинкой
function closePopupBigPic() {
  popupBigPic.classList.remove('popup_opened');
}

// Закрытие попапа добавления места
function closePopupPlace() {
  popupPlace.classList.remove('popup_opened');
}

// Создание карточек
function createNewPlaceCard(event) {
  event.preventDefault();
  const place = {
    name: inputPlace.value,
    link: inputLink.value
  };
  const template = renderTemplateItem(place);
  places.prepend(template);
  closePopupPlace(popupPlace);
}

// Функция подгружающая заготовки из 6-ти карточек
function renderTemplateItem({name, link}) {
  const template = itemTemplate.cloneNode(true);
  const elementsTitle = template.querySelector('.elements__title');
  const elementsPhoto = template.querySelector('.elements__photo');

    elementsPhoto.src = link;
    elementsTitle.textContent = name;
    elementsPhoto.dataset.name = name;
    elementsPhoto.dataset.link = link;

    template.querySelector('.elements__like-button').addEventListener('click', function (event) {
      event.target.classList.toggle('elements__like-button_active');
    });

    template.querySelector('.elements__remove').addEventListener('click', function (event) {
      event.target.closest('.elements__item').remove();
    });

    elementsPhoto.addEventListener('click', () => {
      openPopupBigPic(name, link);
    });

    return template;
}

// Добавление карточек
function addCards({ name, link }) {
  const card = renderTemplateItem({ name, link });
  places.append(card);
}

// Открытие попапа с увеличенной картинкой места и подписью внизу
const openPopupBigPic = (name, link) => {
  openPopup(popupBigPic);
  bigPicTitle.textContent = name;
  bigPic.src = link;
  bigPic.alt = name;
}

//Вывод карточек
function cardsOut() {
  initialCards.forEach(function (event) {
    addCards(event);
  });
}

cardsOut();

// Слушаетели
editButton.addEventListener('click', showProfilePopup);
addButton.addEventListener('click', showPlacePopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);
createNewCard.addEventListener('submit', createNewPlaceCard);

closePlace.addEventListener('click', () => {
  closePopupPlace(popupPlace);
});

closeBigPic.addEventListener('click', () => {
  closePopupBigPic(popupBigPic);
});


