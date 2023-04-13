

export class cInput extends HTMLElement {
  static get observedAttributes() { 
    return [ 'color','size','disabled','checked' ]
  }

  constructor() {
    // Always call super first in constructor
    super();

    // styles defualt
    this._color = 'var(--color-text-contrast-high)'
    this._backgroundColor = ''
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
    this.setAttribute('contenteditable', '');
    this.setAttribute('spellcheck', true);
    this.setAttribute('placeholder', 'Untitled');

    this.updateColor()
    this.updateSize()
    this.updateDisabled()
    this.updateChecked()
  }
  rerederedCallback() {
    
  }
  attributeChangedCallback (atr, oldValue, newValue){
    switch (atr) {
      case 'color':
        this.updateColor(newValue)
        break;
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
        background-color:${this._backgroundColor};
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
      }
      :host(:focus) {
        box-shadow: var(--color-text-contrast-high) 0px 0px 0px 1px inset;
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
      case 'xlarge':
        this._padding = '0 14px'
        this._fontSize = '18px'
        this._height = '30px'
        break
      case 'large':
        this._padding = '0 10px'
        this._fontSize = '16px'
        this._height = '26px'
        break
      case 'small':
        this._padding = '0 5px'
        this._fontSize = '12px'
        this._height = '18px'
        break
      default:
        break;
    }
    this.updateStyle()
  }

  updateColor(newValue) {
    switch (newValue) {
      case 'primary':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = ''
        break
      case 'danger':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-danger-opacity-3)'
        break
      case 'warning':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-warning-opacity-3)'
        break
      case 'success':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-success-opacity-3)'
        break
      case 'alarm':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-alarm-opacity-3)'
        break
      case 'relay':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-relay-opacity-3)'
        break
      case 'verification':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-verification-opacity-3)'
        break
      case 'restore':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-restore-opacity-3)'
        break
      case 'playback':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-playback-opacity-3)'
        break
      case 'note':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-note-opacity-3)'
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

