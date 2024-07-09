import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderMessage();

    this_data = data;
    const markup = this_generateMarkup();
    this._clear();
    this_parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this_parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this_clear();
    this_parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(mesaage = this_errorMessage) {
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${mesaage}</p>
    </div>`;
    this_clear();
    this_parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(mesaage = this_message) {
    const markup = `
    <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${mesaage}</p>
    </div>`;
    this_clear();
    this_parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
