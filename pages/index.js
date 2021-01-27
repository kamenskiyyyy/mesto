import { Card } from '../components/Сard.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from './utils/constants.js';

import './pages/index.css';

const editFormValidation = new FormValidator(validationConfig, editForm, true);
const addFormValidation = new FormValidator(validationConfig, addForm, true);

// открытие popup и добавление слушателей
export const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    closeEsc(evt, popup);
  });
  popup.addEventListener('click', (evt) => {
    closeBackground(evt, popup);
  });
};

// редактирование popupEdit
const popupEditSave = (evt) => {
  evt.preventDefault();
  userName.textContent = inputName.value;
  userFeature.textContent = inputFeature.value;
  popupClose(popupEdit);
};

// закрытие по Esc
const closeEsc = (evt, popup) => {
  if (evt.key === 'Escape') {
    popupClose(popup);
  }
};

//закрытие по backgorund
const closeBackground = (evt, popup) => {
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('button_type_close')) {
    popupClose(popup);
  }
};

// закрытие popup
const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', (evt) => {
    closeEsc(evt, popup);
  });
  document.removeEventListener('click', (evt) => {
    closeBackground(evt, popup);
  });
};

// создание карточки
const createCard = (name, link) => {
  const cardElement = new Card(name, link, '.card-template').generateCard();
  return cardElement;
};

// добавление карточек
const addCard = (container, cardElement) => {
  container.prepend(cardElement);
};

// добавление новой карточки
const addNewCard = (evt) => {
  evt.preventDefault();
  addCard(cardList, createCard(newCardName.value, newCardLink.value));
  popupClose(popupAdd);
  evt.target.reset();
};

// открытие popupAdd 
addButton.addEventListener('click', () => {
  popupOpen(popupAdd);
  addFormValidation.enableValidation();
});

// открытие popupEdit
editButton.addEventListener('click', () => {
  inputName.value = userName.textContent;
  inputFeature.value = userFeature.textContent;
  popupOpen(popupEdit);
  editFormValidation.enableValidation();
});

popupEdit.addEventListener('submit', popupEditSave);

popupAdd.addEventListener('submit', addNewCard);

// рендер начальных карточек
initialCards.forEach((item) => {
  addCard(cardList, createCard(item.name, item.link));
});