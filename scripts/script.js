const profileEditButtonNode = document.querySelector('.profile__edit-button');
const popupNode = document.querySelector('.popup');
const popupCloseButtonNode = document.querySelector('.popup__close-button');

const profileNameNode = document.querySelector('.profile__name');
const profileJobNode = document.querySelector('.profile__job');
const formNode = document.querySelector('.form');
let nameImput = document.querySelector('.form__name');
let jobImput = document.querySelector('.form__job');

profileEditButtonNode.addEventListener('click', togglePopupVisibility);
popupCloseButtonNode.addEventListener('click', togglePopupVisibility);

function togglePopupVisibility() {
    popupNode.classList.toggle('popup__view');
    
}

formNode.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameNode.textContent = nameImput.value;
    profileJobNode.textContent = jobImput.value;
}