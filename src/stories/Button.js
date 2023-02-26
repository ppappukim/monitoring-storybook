export class cButton extends HTMLElement {
  static get observedAttributes() { 
    return [
      'color','size','type', 'disabled'
    ]
  }

  constructor() {
    // Always call super first in constructor
    super();

    // styles defualt
    this._color = 'var(--color-text-high)'
    this._backgroundColor = 'var(--color-surface-3)'
    this._hoverBackgroundColor = 'var(--color-surface-5)'
    this._activeBackgroundColor = 'var(--color-surface-7)'
    this._colorOutline = 'var(--color-text-high)'
    this._hoverBackgroundColorOutline = 'var(--color-surface-5)'
    this._activeBackgroundColorOutline = 'var(--color-surface-7)'
    this._padding = '0 14px'
    this._fontSize = '14px'
    this._height = '36px'
    this._border = 'none'

    this.shadow = this.attachShadow({mode:'open'})
    const slot = document.createElement('slot');
    const style = document.createElement('style');
    this.shadow.appendChild(style);
    this.shadow.appendChild(slot);
  }

  connectedCallback() {
    this.updateColor()
    this.updateSize()
    this.updateType()
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
      case 'type':
        this.updateType(newValue)
        break;
      case 'disabled':
        this.updateDisabled(newValue)
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
        height:${this._height};
        border:${this._border};
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap:3px;
        white-space: nowrap;
        border-radius: 3px;
        font-weight:700;
        cursor: pointer;
        box-shadow: rgb(15 15 15 / 10%) 0px 0px 0px 1px inset, rgb(15 15 15 / 10%) 0px 1px 2px;
        user-select: none;
      }
      :host(:hover) {
        background-color: ${this._hoverBackgroundColor};
      }
      :host(:active) {
        background-color: ${this._activeBackgroundColor};
      }
      :host(.--outline) {
        background-color: transparent !important;
        color: ${this._colorOutline};
        outline-offset: -1px;
        outline: solid 1px ${this._colorOutline};
      }
      :host(.--outline:hover) {
        background-color: ${this._hoverBackgroundColorOutline};
      }
      :host(.--outline:active) {
        background-color: ${this._activeBackgroundColorOutline};
      }
      :host(.--disabled) {
        opacity:.38;
        pointer-events: none;
      }
    `
  }

  updateSize(newValue) {
    switch (newValue) {
      case 'large':
        this._padding = '0 20px'
        this._fontSize = '16px'
        this._height = '42px'
        break
      case 'small':
        this._padding = '0 10px'
        this._fontSize = '12px'
        this._height = '28px'
        break
      default:
        break;
    }
    this.updateStyle()
  }

  updateColor(newValue) {
    switch (newValue) {
      case 'primary':
        this._color = 'var(--color-text-high)'
        this._backgroundColor = 'var(--color-primary)'
        this._hoverBackgroundColor = 'var(--color-primary-tint)'
        this._activeBackgroundColor = 'var(--color-primary-shade)'

        this._colorOutline = 'var(--color-primary)'
        this._hoverBackgroundColorOutline = 'var(--color-primary-opacity-1)'
        this._activeBackgroundColorOutline = 'var(--color-primary-opacity-2)'
        break
      case 'danger':
        this._color = 'var(--color-text-high)'
        this._backgroundColor = 'var(--color-danger)'
        this._hoverBackgroundColor = 'var(--color-danger-tint)'
        this._activeBackgroundColor = 'var(--color-danger-shade)'

        this._colorOutline = 'var(--color-danger)'
        this._hoverBackgroundColorOutline = 'var(--color-danger-opacity-1)'
        c
        break
      case 'warning':
        this._color = 'var(--color-text-high)'
        this._backgroundColor = 'var(--color-warning)'
        this._hoverBackgroundColor = 'var(--color-warning-tint)'
        this._activeBackgroundColor = 'var(--color-warning-shade)'

        this._colorOutline = 'var(--color-warning)'
        this._hoverBackgroundColorOutline = 'var(--color-warning-opacity-1)'
        this._activeBackgroundColorOutline = 'var(--color-warning-opacity-2)'
        break
      case 'success':
        this._color = 'var(--color-text-high)'
        this._backgroundColor = 'var(--color-success)'
        this._hoverBackgroundColor = 'var(--color-success-tint)'
        this._activeBackgroundColor = 'var(--color-success-shade)'

        this._colorOutline = 'var(--color-success)'
        this._hoverBackgroundColorOutline = 'var(--color-success-opacity-1)'
        this._activeBackgroundColorOutline = 'var(--color-success-opacity-2)'
        break
      case 'black':
        this._color = 'var(--color-text-high)'
        this._backgroundColor = 'var(--color-black)'
        this._hoverBackgroundColor = 'var(--color-black-tint)'
        this._activeBackgroundColor = 'var(--color-black-shade)'

        this._colorOutline = 'var(--color-black)'
        this._hoverBackgroundColorOutline = 'var(--color-black-opacity-1)'
        this._activeBackgroundColorOutline = 'var(--color-black-opacity-2)'
        break
      case 'white':
        this._color = 'var(--color-text-contrast-high)'
        this._backgroundColor = 'var(--color-white)'
        this._hoverBackgroundColor = 'var(--color-black-opacity-1)'
        this._activeBackgroundColor = 'var(--color-black-opacity-2)'

        this._colorOutline = 'var(--color-text-high)'
        this._hoverBackgroundColorOutline = 'var(--color-white-opacity-1)'
        this._activeBackgroundColorOutline = 'var(--color-white-opacity-2)'
        break
      default:
        break;
    } 
    this.updateStyle()
  }
  updateType(newValue) {
    switch (newValue) {
      case 'fill':
        this.classList.remove('--outline');
        break
      case 'outline':
        this.classList.add('--outline');
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
}
    
customElements.define('c-button', cButton)

