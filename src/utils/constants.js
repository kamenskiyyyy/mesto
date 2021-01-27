const popupEdit = document.querySelector('.popup_type_edit');
export const editForm = popupEdit.querySelector('.popup__form');
export const editButton = document.querySelector('.button_type_edit');
export const inputName = popupEdit.querySelector('.popup__input_type_name');
export const inputFeature = popupEdit.querySelector('.popup__input_type_feature');
const popupAdd = document.querySelector('.popup_type_add');
export const addForm = popupAdd.querySelector('.popup__form');
export const addButton = document.querySelector('.button_type_add');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: '.popup__error'
};

import Arhuz from '../images/arkhyz.jpg';
import Chelubinsk from '../images/chelyabinsk-oblast.jpg';
import Ivanovo from '../images/ivanovo.jpg';
import Kamchatka from '../images/kamchatka.jpg';
import Holmogorskii from '../images/kholmogorsky-rayon.jpg';
import Baikal from '../images/baikal.jpg';

export const initialCards = [
    {
        name: 'Архыз',
        link: Arhuz
    },
    {
        name: 'Челябинская область',
        link: Chelubinsk
    },
    {
        name: 'Иваново',
        link: Ivanovo
    },
    {
        name: 'Камчатка',
        link: Kamchatka
    },
    {
        name: 'Холмогорский район',
        link: Holmogorskii
    },
    {
        name: 'Байкал',
        link: Baikal
    }
];