const profileEditButtonNode = document.querySelector('.profile__edit-button');
const elementAddButtonNode = document.querySelector('.profile__add-button');
const popupEditNode = document.querySelector('#profile-edit');
const popupNewElementNode = document.querySelector('#new-element');
const popupImageNode = document.querySelector('#img-full');
const root = document.querySelector('.root');
const popupList = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup__img');
const popupTitle = document.querySelector('.popup__title-img');
const stateButton = document.querySelector('#form__button-add');

const profileNameNode = document.querySelector('.profile__name');
const profileJobNode = document.querySelector('.profile__job');
const formNode = document.querySelector('.form');
const formAddItem = document.querySelector('#form__add_item');
const nameInput = document.querySelector('.form__name');
const jobInput = document.querySelector('.form__job');

const elementsConteiner = document.querySelector('.elements');
const titleInput = document.querySelector('.form__title');
const urlInput = document.querySelector('.form__url');
const templateElement = document.querySelector('.template');

const popupCloseButtonNode = document.querySelector('#close_profile_edit');
const popupNewElementCloseButtonNode = document.querySelector('#close_new_element');
const popupImageBodeCloseButton = document.querySelector('#close_img_full');

function setCardEventListeners(item){
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
    const imgElement = newItem.querySelector('.element__img');
    imgElement.src = link;
    imgElement.alt = alt;
    imgElement.data = name; // необходимо для описания картинки в попапе
    setCardEventListeners(newItem);
    return newItem;
};

function renderElements() {
    const elementCard = initialCards.map(composeItem);
    elementsConteiner.append(...elementCard);
};

function openPopup(popup) {
    popup.classList.add('popup__view');
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
    popup.classList.remove('popup__view');
    document.removeEventListener('keydown', closePopupEsc);
}

function openPopupEditProfileVisibility(popup) {
    openPopup(popup);
    nameInput.value = profileNameNode.textContent;
    jobInput.value = profileJobNode.textContent;
};

function handleProfileFormSubmit(evt) {
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
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupTitle.textContent = evt.target.data;
    openPopup(popupImageNode);
};

function closePopupClickOvarlay(evt) {
    const closeClick = evt.target;
    if (closeClick.classList.contains('popup')) {
        closePopup(document.querySelector('.popup__view'));
    };
};

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup__view'));
    };
};

formNode.addEventListener('submit', handleProfileFormSubmit);
profileEditButtonNode.addEventListener('click', () => openPopupEditProfileVisibility(popupEditNode));
popupCloseButtonNode.addEventListener('click', () => closePopup(popupEditNode));
elementAddButtonNode.addEventListener('click', () => { 
    setButtonState(stateButton, formAddItem.checkValidity(), validationConfig);
    openPopup(popupNewElementNode);
});
popupNewElementCloseButtonNode.addEventListener('click', () => closePopup(popupNewElementNode));
popupImageBodeCloseButton.addEventListener('click', () => closePopup(popupImageNode));
root.addEventListener('click', closePopupClickOvarlay);

renderElements();
bindAddItemElement();