const profileEditButtonNode = document.querySelector('.profile__edit-button');
const elementAddButtonNode = document.querySelector('.profile__add-button');
const popupEditNode = document.querySelector('.profile-edit');
const popupNewElementNode = document.querySelector('.new-element');
const popupImageNode = document.querySelector('.img-full');
const popupCloseButtonNode = document.querySelector('.popup__close-button');
const popupNewElementCloseButtonNode = document.querySelector('.popup__close-button-elem');
const popupImageBodeCloseButton = document.querySelector('.popup__close-button-image');
const popupSaveButtonNode = document.querySelector('.form__button');

const profileNameNode = document.querySelector('.profile__name');
const profileJobNode = document.querySelector('.profile__job');
const formNode = document.querySelector('.form');
const nameInput = document.querySelector('.form__name');
const jobInput = document.querySelector('.form__job');

const elementsConteiner = document.querySelector('.elements');
const elementNameNode = document.querySelector('.element__name');
const elementUrlNode = document.querySelector('.element__img');
const titleInput = document.querySelector('.form__title');
const urlInput = document.querySelector('.form__url');
const templateElement = document.querySelector('.template');

const initialCards = [
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

function functionalCardElementListener(evt){
    const removeButton = evt.querySelector('.element__trash-button');
    removeButton.addEventListener('click', removeItem);
    const likeButton = evt.querySelector('.element__like-button');
    likeButton.addEventListener('click', likeItem);
    const openImageButton = evt.querySelector('.element__img-open-full');
    openImageButton.addEventListener('click', openImagePopup);
};

function composeItem({name, link, alt}){
    const newItem = templateElement.content.cloneNode(true);
    const neaderElement = newItem.querySelector('.element__name');
    neaderElement.textContent = name;
    const urlElement = newItem.querySelector('.element__img');
    urlElement.src = link;
    const altElement = newItem.querySelector('.element__img');
    altElement.alt = alt;
    const dataElement = newItem.querySelector('.element__img');
    dataElement.data = name;
    functionalCardElementListener(newItem);
    return newItem;
};

function renderElements() {
    const elementCard = initialCards.map(composeItem);
    elementsConteiner.append(...elementCard);
};

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

function bindAddItemElement() {
    const addButtonElement = document.querySelector('#form__button-add');
    addButtonElement.addEventListener('click', addNewItem);
};

function addNewItem(evt) {
    evt.preventDefault();
    const name = titleInput.value;
    const link = urlInput.value;
    const newItem = composeItem({name, link});
    elementsConteiner.prepend(newItem);
    titleInput.value = '';
    urlInput.value = '';
    closePopupAddElementVisibility();
};

function removeItem(evt) {
    const targetItem = evt.target.closest('.element');
    targetItem.remove();
};

function likeItem(evt) {
    const targetItem = evt.target.closest('.element__like-button');
    targetItem.classList.toggle('element__like-button-active');
};

function openImagePopup(evt) {
    popupImageNode.classList.add('popup__view');
    const popupImage = document.querySelector('.popup__img');
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    const popupTitle = document.querySelector('.popup__title-img');
    popupTitle.textContent = evt.target.data;
};

function closeImagePopup() {
    popupImageNode.classList.remove('popup__view');
};

profileEditButtonNode.addEventListener('click', openPopupEditProfileVisibility);
popupCloseButtonNode.addEventListener('click', closePopupVisibility);
formNode.addEventListener('submit', formSubmitHandler);
elementAddButtonNode.addEventListener('click', openPopupAddElementVisibility);
popupNewElementCloseButtonNode.addEventListener('click', closePopupAddElementVisibility);
popupImageBodeCloseButton.addEventListener('click', closeImagePopup);


renderElements();
bindAddItemElement();

