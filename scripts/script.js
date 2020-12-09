const profileEditButtonNode = document.querySelector('.profile__edit-button');
const elementAddButtonNode = document.querySelector('.profile__add-button');
const popupEditNode = document.querySelector('#profile-edit');
const popupNewElementNode = document.querySelector('#new-element');
const popupImageNode = document.querySelector('#img-full');

const profileNameNode = document.querySelector('.profile__name');
const profileJobNode = document.querySelector('.profile__job');
const formNode = document.querySelector('.form');
const nameInput = document.querySelector('.form__name');
const jobInput = document.querySelector('.form__job');

const elementsConteiner = document.querySelector('.elements');
const titleInput = document.querySelector('.form__title');
const urlInput = document.querySelector('.form__url');
const templateElement = document.querySelector('.template');

const popupCloseButtonNode = document.querySelector('#close_profile_edit');
const popupNewElementCloseButtonNode = document.querySelector('#close_new_element');
const popupImageBodeCloseButton = document.querySelector('#close_img_full');

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

function functionalElementCardListener(item){
    const removeButton = item.querySelector('.element__trash-button');
    removeButton.addEventListener('click', removeItem);
    const likeButton = item.querySelector('.element__like-button');
    likeButton.addEventListener('click', likeItem);
    const openImageButton = item.querySelector('.element__img-open-full');
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
    functionalElementCardListener(newItem);
    return newItem;
};

function renderElements() {
    const elementCard = initialCards.map(composeItem);
    elementsConteiner.append(...elementCard);
};

function openPopup(popup) {
    popup.classList.add('popup__view');
}

function closePopup(popup) {
    popup.classList.remove('popup__view');
}

function openPopupEditProfileVisibility(popup) {
    popup.classList.add('popup__view');
    nameInput.value = profileNameNode.textContent;
    jobInput.value = profileJobNode.textContent;
};

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNameNode.textContent = nameInput.value;
    profileJobNode.textContent = jobInput.value;
    closePopup(popupEditNode);
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
    closePopup(popupNewElementNode);
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

formNode.addEventListener('submit', formSubmitHandler);
profileEditButtonNode.addEventListener('click', () => openPopupEditProfileVisibility(popupEditNode));
popupCloseButtonNode.addEventListener('click', () => closePopup(popupEditNode));
elementAddButtonNode.addEventListener('click', () => openPopup(popupNewElementNode));
popupNewElementCloseButtonNode.addEventListener('click', () => closePopup(popupNewElementNode));
popupImageBodeCloseButton.addEventListener('click', () => closePopup(popupImageNode));

renderElements();
bindAddItemElement();