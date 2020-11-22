let profileEditButtonNode = document.querySelector('.profile__edit-button');
let popupNode = document.querySelector('.popup');
let popupCloseButtonNode = document.querySelector('.popup__close-button');

let profileNameNode = document.querySelector('.profile__name');
let profileJobNode = document.querySelector('.profile__job');
let formNode = document.querySelector('.form');
let nameInput = document.querySelector('.form__name');
let jobInput = document.querySelector('.form__job');

profileEditButtonNode.addEventListener('click', togglePopupVisibility);
popupCloseButtonNode.addEventListener('click', togglePopupVisibility);

function togglePopupVisibility() {
    popupNode.classList.toggle('popup__view');
    
}

formNode.addEventListener('submit', formSubmitHandler);

nameInput.value = profileNameNode.textContent;
jobInput.value = profileJobNode.textContent;

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameNode.textContent = nameInput.value;
    profileJobNode.textContent = jobInput.value;
}