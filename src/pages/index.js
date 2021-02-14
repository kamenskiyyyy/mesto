import "./index.css";
import {
  editForm,
  editButton,
  inputName,
  inputFeature,
  addForm,
  addButton,
  validationConfig,
  editAvatarButton,
  avatarForm
}
from '../utils/constants';

import Card from '../components/Сard';
import { FormValidator } from '../components/FormValidator';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import Api from '../components/Api';
import PopupWithConfirm from '../components/PopupWithConfirm';

const imagePopup = new PopupWithImage('.popup_type_image');
const userData = new UserInfo('.profile__name', '.profile__feature', '.profile__photo');

const editFormValidation = new FormValidator(validationConfig, editForm);
editFormValidation.enableValidation();

const addFormValidation = new FormValidator(validationConfig, addForm);
addFormValidation.enableValidation();

const avatarFormValidation = new FormValidator(validationConfig, avatarForm);
avatarFormValidation.enableValidation();

const popupDelConfirm = new PopupWithConfirm('.popup_type_submit', {
  handleFormSubmit: (data) => {
    api.delCard(data)
      .then(() => {
        tempCard.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

const popupEditAvatar = new PopupWithForm('.popup_type_edit-avatar', {
  handleFormSubmit: (data) => {
    popupEditAvatar.checkDownload(false);
    api.setAvatar(data)
    .then(() => {
      userData.setUserAvatar(data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditAvatar.close();
      popupEditAvatar.checkDownload(true);
    });
  }
});

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
    authorization: 'af47fd49-b31e-4449-b574-1e5cb0a80b14',
    'Content-Type': 'application/json'
  }
});

let myId = '';
let tempCard = '';

api.getInitialData()
  .then((res) => {
    const [user, cards] = res;
    myId = user._id;
    userData.setUserInfo(user);
    userData.setUserAvatar(user);
    cardsArray.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(item) {
  const card = new Card(item, myId, '.card-template', {
    handleCardClick: (item) => {
      imagePopup.open(item);
    },
    handleDelClick: (item) => {
      popupDelConfirm.open(item);
      tempCard = card;
    },
    setLike: (item) => {
      api.setLike(item)
        .then((item) => {
          card.setLikes(item);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delLike: (item) => {
      api.delLike(item)
        .then((item) => {
          card.setLikes(item);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  return card;
}

const cardsArray = new Section({
  renderer: (item) => {
    const card = createCard(item);
    const cardElement = card.generateCard();
    cardsArray.addItem(cardElement);
  }
}, '.cards-list');

const popupAddCard = new PopupWithForm('.popup_type_add', {
  handleFormSubmit: (item) => {
    popupAddCard.checkDownload(false);
    api.setNewCard(item)
      .then((res) => {
        const card = createCard(res);
        const cardElement = card.generateCard();
        cardsArray.addItem(cardElement);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupAddCard.close();
        popupAddCard.checkDownload(true);
      });
  },
});

function openPopupAddCard() {
  popupAddCard.open();
  addFormValidation.checkValidity();
}

const popupEditProfile = new PopupWithForm('.popup_type_edit', {
  handleFormSubmit: (item) => {
    popupEditProfile.checkDownload(false);
    api.setUserInfo(item)
      .then((res) => {
        userData.setUserInfo(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupEditProfile.close();
        popupEditProfile.checkDownload(true);
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

function openPopupEditAvatar() {
  popupEditAvatar.open();
  avatarFormValidation.checkValidity();
}

editButton.addEventListener('click', openPopupEditProfile);
addButton.addEventListener('click', openPopupAddCard);
editAvatarButton.addEventListener('click', openPopupEditAvatar);