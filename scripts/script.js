let profileEditButtonNode = document.querySelector('.profile__edit-button');
let elementAddButtonNode = document.querySelector('.profile__add-button');
let popupEditNode = document.querySelector('.profile-edit');
let popupNewElementNode = document.querySelector('.new-element');
let popupCloseButtonNode = document.querySelector('.popup__close-button');
let popupNewElementCloseButtonNode = document.querySelector('.popup__close-button-elem');
let popupSaveButtonNode = document.querySelector('.form__button');

let profileNameNode = document.querySelector('.profile__name');
let profileJobNode = document.querySelector('.profile__job');
let formNode = document.querySelector('.form');
let nameInput = document.querySelector('.form__name');
let jobInput = document.querySelector('.form__job');

const elementsConteiner = document.querySelector('.elements');
const titleInput = document.querySelector('.form__title');
const urlInput = document.querySelector('.form__url');
const templateElement = document.querySelector('.template')

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




function openPopupEditProfileVisibility() {
    popupEditNode.classList.add('popup__view');
    nameInput.value = profileNameNode.textContent;
    jobInput.value = profileJobNode.textContent;
};

function closePopupVisibility() {
    popupEditNode.classList.remove('popup__view');
};

function openPopupAddElementVisibility() {
    popupNewElementNode.classList.add('popup__view');
    // добавить imput
};

function closePopupAddElementVisibility() {
    popupNewElementNode.classList.remove('popup__view');
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameNode.textContent = nameInput.value;
    profileJobNode.textContent = jobInput.value;
    closePopupVisibility();
};

profileEditButtonNode.addEventListener('click', openPopupEditProfileVisibility);
popupCloseButtonNode.addEventListener('click', closePopupVisibility);
formNode.addEventListener('submit', formSubmitHandler);
elementAddButtonNode.addEventListener('click', openPopupAddElementVisibility);
popupNewElementCloseButtonNode.addEventListener('click', closePopupAddElementVisibility);