let profileEditButtonNode = document.querySelector('.profile__edit-button');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');
let popupSaveButtonNode = document.querySelector('.form__button');

let profileNameNode = document.querySelector('.profile__name');
let profileJobNode = document.querySelector('.profile__job');
let formNode = document.querySelector('.form');
let nameInput = document.querySelector('.form__name');
let jobInput = document.querySelector('.form__job');

function openPopupVisibility() {
    popupNode.classList.add('popup__view');
    nameInput.value = profileNameNode.textContent;
    jobInput.value = profileJobNode.textContent;
}

function closePopupVisibility() {
    popupNode.classList.remove('popup__view');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameNode.textContent = nameInput.value;
    profileJobNode.textContent = jobInput.value;
    closePopupVisibility();
}

profileEditButtonNode.addEventListener('click', openPopupVisibility);
popupCloseButtonNode.addEventListener('click', closePopupVisibility);
formNode.addEventListener('submit', formSubmitHandler);