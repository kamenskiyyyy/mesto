import "./index.css";
import {
  editForm,
  editButton,
  inputName,
  inputFeature,
  addForm,
  addButton,
  validationConfig
}
from '../utils/constants';

import Card from '../components/Сard';
import { FormValidator } from '../components/FormValidator';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api';

const imagePopup = new PopupWithImage('.popup_type_image');
const userData = new UserInfo('.profile__name', '.profile__feature', '.profile__photo');

const editFormValidation = new FormValidator(validationConfig, editForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationConfig, addForm);
addFormValidation.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
    authorization: 'af47fd49-b31e-4449-b574-1e5cb0a80b14',
    'Content-Type': 'application/json'
  }
});

let myId = '';

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(res => {
    myId = res[0]._id;
    userData.setUserInfo({
      userName: res[0].name,
      userSpec: res[0].about
    });
    cardsArray.renderItems(res[1]);
  })
  .catch(err => {
    console.log(err);
  });

function createCard(item) {
  return new Card(item, myId, '.card-template', {
    handleCardClick: () => {
      const data = {};
      data.src = item.link;
      data.textContent = item.name;
      imagePopup.open(data);
    }
  }).generateCard();
}

const cardsArray = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsArray.addItem(cardElement);
  }
}, '.cards-list');

///////////////////////////////////////////////////////

const popupAddCard = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (item) => {
    api.setNewCard(item)
      .then(res => {
        const cardElement = createCard(res);
        cardsArray.addItem(cardElement);
      })
      .catch(error => {
        console.log(error);
      });
  },
});

function openPopupAddCard() {
  popupAddCard.open();
  addFormValidation.checkValidity();
}

addButton.addEventListener('click', openPopupAddCard);

/////////////////////////////////////////////////////

const popupEditProfile = new PopupWithForm('.popup_type_edit', {
  handleFormSubmit: (item) => {
    api.setUserInfo(item)
      .then(res => {
        userData.setUserInfo({
          userName: res.name,
          userFeature: res.about
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
});

function openPopupEditProfile() {
  const newUser = userData.getUserInfo();
  inputName.value = newUser.name;
  inputFeature.value = newUser.feature;
  editFormValidation.checkValidity();
  popupEditProfile.open();
}

editButton.addEventListener('click', openPopupEditProfile);