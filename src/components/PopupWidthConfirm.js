import Popup from './Popup';

export default class PopupWithConfirm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._setEventListener();
    }

    _setEventListener() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault;
            this._handleFormSubmit(this._data);
            this.close();
        });
    }

    open(data) {
        super.open();
        this._data = data;
    }
}