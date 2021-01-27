export const popupEdit = document.querySelector('.popup_type_edit');
export const editForm = popupEdit.querySelector('.popup__form');
export const editButton = document.querySelector('.button_type_edit');
export const userName = document.querySelector('.profile__name');
export const userFeature = document.querySelector('.profile__feature');
export const inputName = popupEdit.querySelector('.popup__input_type_name');
export const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
export const popupImage = document.querySelector('.popup_type_image');
export const popupAdd = document.querySelector('.popup_type_add');
export const addForm = popupAdd.querySelector('.popup__form');
export const newCardName = popupAdd.querySelector('.popup__input_type_place-name');
export const newCardLink = popupAdd.querySelector('.popup__input_type_link');
export const addButton = document.querySelector('.button_type_add');
export const cardList = document.querySelector('.cards-list');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        alt: 'Архыз'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
        alt: 'Челябинская область'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
        alt: 'Холмогорский район'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
        alt: 'Байкал'
    }
];