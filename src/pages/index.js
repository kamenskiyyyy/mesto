import {
  popupEdit,
  editForm,
  editButton,
  inputName,
  inputFeature,
  popupImage,
  popupAdd,
  addForm,
  addButton,
  validationConfig,
  initialCards
}
from '../utils/constants.js';

import Card from '../../components/Сard.js';
import { FormValidator } from '../../components/Validate.js';
import Section from '../../components/Section.js';
import PopupWithImage from '../../components/PopupWithImage.js';
import PopupWithForm from '../../components/PopupWithForm.js';
import UserInfo from '../../components/UserInfo.js';

const imagePopup = new PopupWithImage('.popup_type_image');
const userData = new UserInfo('.profile__name', '.profile__feature');
const editFormValidation = new FormValidator(validationConfig, editForm, true);
const addFormValidation = new FormValidator(validationConfig, addForm, true);

function createCard(item) {
  return new Card(item, '.card-template', {
    handleCardClick: () => {
      const data = {};
      data.src = item.link;
      data.textContent = item.title;
      imagePopup.open(data);
    }
  }).generateCard();
}

const cardsArray = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsArray.addItem(cardElement);
  }
}, '.cards-list');

cardsArray.renderItems();

///////////////////////////////////////////////////////

const popupAddCard = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (item) => {
    const cardElement = createCard(item);
    cardsArray.addItem(cardElement);
  },
});

function openPopupAddCard() {
  popupAddCard.open();
  addFormValidation.enableValidation();
}

addButton.addEventListener('click', openPopupAddCard);

/////////////////////////////////////////////////////

const popupEditProfile = new PopupWithForm('.popup_type_edit', {
  handleFormSubmit: (item) => {
    console.log(item);
    userData.setUserInfo({
      userName: item.name,
      userFeature: item.feature,
    });
  }
});

function openPopupEditProfile() {
  const newUser = userData.getUserInfo();
  inputName.value = newUser.Name;
  inputFeature.value = newUser.Feature;
  editFormValidation.enableValidation();
  popupEditProfile.open();
}

editButton.addEventListener('click', openPopupEditProfile);