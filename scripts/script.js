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
let elementNameNode = document.querySelector('.element__name');
let elementUrlNode = document.querySelector('.element__img');
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

function renderElements() {
    const elementCard = initialCards.map(composeItem);
    elementsConteiner.append(...elementCard);
};

function composeItem({name, link, alt}){
    const newItem = templateElement.content.cloneNode(true);
    const neaderElement = newItem.querySelector('.element__name');
    neaderElement.textContent = name;
    const urlElement = newItem.querySelector('.element__img');
    urlElement.src = link;
    const altElement = newItem.querySelector('.element__img');
    altElement.alt = alt;
    removeAndLikeAddElementCard(newItem);
    return newItem;
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

function removeAndLikeAddElementCard(item){
    const removeButton = item.querySelector('.element__trash-button');
    removeButton.addEventListener('click', removeItem);
    const likeButton = item.querySelector('.element__like-button');
    likeButton.addEventListener('click', likeItem);
}

function bindAddItemElement() {
    const addButtonElement = document.querySelector('#form__button-add');
    addButtonElement.addEventListener('click', addNewItem);
}

function addNewItem(evt){
    evt.preventDefault();
    const name = titleInput.value;
    const link = urlInput.value;
    const newItem = composeItem({name, link});
    elementsConteiner.prepend(newItem);
    titleInput.value = '';
    urlInput.value = '';
    closePopupAddElementVisibility();
}

function removeItem(event){
    const targetItem = event.target.closest('.element');
    targetItem.remove();
}

function likeItem(event) {
    const targetItem = event.target.closest('.element__like-button');
    targetItem.classList.toggle('element__like-button-active');
}

profileEditButtonNode.addEventListener('click', openPopupEditProfileVisibility);
popupCloseButtonNode.addEventListener('click', closePopupVisibility);
formNode.addEventListener('submit', formSubmitHandler);
elementAddButtonNode.addEventListener('click', openPopupAddElementVisibility);
popupNewElementCloseButtonNode.addEventListener('click', closePopupAddElementVisibility);


renderElements();
bindAddItemElement();

