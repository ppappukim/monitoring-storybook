

export class cInput extends HTMLElement {
  static get observedAttributes() { 
    return [ 'size','disabled','checked' ]
  }

  constructor() {
    // Always call super first in constructor
    super();

    // styles defualt
    this._padding = '0 10px'
    this._fontSize = '14px'
    this._width = '320px'
    this._lineHeight = '36px'

    this.shadow = this.attachShadow({mode:'open'})
    const slot = document.createElement('slot');
    const style = document.createElement('style');
    this.shadow.appendChild(style);
    this.shadow.appendChild(slot);
  }

  connectedCallback() {
    // for add attribute for input feature
    this.setAttribute('contenteditable', true);
    this.setAttribute('spellcheck', true);

    this.updateSize()
    this.updateDisabled()
    this.updateChecked()
  }
  rerederedCallback() {
    
  }
  attributeChangedCallback (atr, oldValue, newValue){
    switch (atr) {
      case 'size':
        this.updateSize(newValue)
        break;
      case 'disabled':
        this.updateDisabled(newValue)
        break;
      case 'checked':
        this.updateChecked(newValue)
        break;
      default:
        break;
    }
  }

  disconnectedCallback() {
    
    // Custom square element removed from page.
  }
  adoptedCallback() {

    // Custom square element moved to new page.
  }

  updateStyle () {
    this.shadow.querySelector('style').textContent = `
      :host {
        color: ${this._color};
        padding:${this._padding};
        font-size: ${this._fontSize};
        border-radius: 3px;
        width: ${this._width};
        line-height: ${this._lineHeight};
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-weight: 500;
        box-shadow: var(--color-black-opacity-2) 0px 0px 0px 1px inset;
        outline: none;
        transition: box-shadow .2s;
        overflow: hidden;
      }
      :host(:focus) {
        box-shadow: var(--color-text-contrast-high) 0px 0px 0px 1px inset;
        transition: box-shadow .3s;
      }
      :host(:empty)::after {
        content: attr(placeholder);
        color: var(--color-text-contrast-low);
        font-weight: 500;
      }
      :host(.--disabled) {
        pointer-events: none;
        background-color: var(--color-black-opacity-1);
        color: var(--color-text-contrast-middle);
      }
      :host(.--checked) {
        background-color: var(--color-primary-opacity-1);
      }
    `
  }

  updateSize(newValue) {
    switch (newValue) {
      case 'large':
        this._padding = '0 14px'
        this._fontSize = '18px'
        this._lineHeight = '42px'
        break
      case 'medium':
        this._padding = '0 10px'
        this._fontSize = '14px'
        this._lineHeight = '36px'
        break
      case 'small':
        this._padding = '0 7px'
        this._fontSize = '12px'
        this._lineHeight = '28px'
        break
      default:
        break;
    }
    this.updateStyle()
  }
  updateDisabled(newValue) {
    switch (newValue) {
      case 'true':
        this.classList.add('--disabled');
        break
      case 'false':
        this.classList.remove('--disabled');
        break
    }
    this.updateStyle()
  }
  updateChecked(newValue) {
    switch (newValue) {
      case 'true':
        this.classList.add('--checked');
        break
      case 'false':
        this.classList.remove('--checked');
        break
    }
    this.updateStyle()
  }
}
    
customElements.define('c-input', cInput)

