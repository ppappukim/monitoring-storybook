

export class cInput extends HTMLElement {
  static get observedAttributes() { 
    return [ 'color','size','disabled' ]
  }

  constructor() {
    // Always call super first in constructor
    super();

    // styles defualt
    this._color = 'var(--color-text-high)'
    this._backgroundColor = 'var(--color-surface-3)'
    this._padding = '0 6px'
    this._fontSize = '14px'
    this._height = '20px'

    this.shadow = this.attachShadow({mode:'open'})
    const slot = document.createElement('slot');
    const style = document.createElement('style');
    this.shadow.appendChild(style);
    this.shadow.appendChild(slot);
  }

  connectedCallback() {
    this.updateColor()
    this.updateSize()
    this.updateDisabled()
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
        display: block;
        white-space: nowrap;
        border-radius: 3px;
        width: fit-content;
        display: inline-flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight: 500;
      }
      :host(.--disabled) {
        opacity:.38;
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
        this._backgroundColor = 'var(--color-primary-opacity-3)'
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
  // updateType(newValue) {
  //   switch (newValue) {
  //     case 'outline':
  //       this._border = `solid 1px ${this._backgroundColor}`
  //       this._color = `${this._backgroundColor}`
  //       this._backgroundColor = `none`
  //       break
  //     default:
  //       break;
  //   }
  //   this.updateStyle()
  // }
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
    
customElements.define('c-input', cInput)

