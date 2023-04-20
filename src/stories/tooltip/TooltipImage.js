

export class cTooltipImage extends HTMLElement {
  static get observedAttributes() { 
    return [ 'src' ]
  }

  constructor() {
    // Always call super first in constructor
    super();

    const img = document.createElement('img');
    const style = document.createElement('style');
    // need to add slot for component inside component 
    const slot = document.createElement('slot');
    img.id = 'img'

    this.shadow = this.attachShadow({mode:'open'})
    this.shadow.appendChild(style);
    this.shadow.appendChild(img);
    this.shadow.appendChild(slot);
  }

  connectedCallback() {
  }
  rerederedCallback() {
  }

  attributeChangedCallback (atr, oldValue, newValue){
    switch (atr) {
      case 'src':
        this.updateSrc(newValue)
        break;
      default:
        break;
    }
    this.updateStyle()
  }

  disconnectedCallback() {
  }
  adoptedCallback() {
  }

  updateStyle () {
    this.shadow.querySelector('style').textContent = 
    `
      :host img {
        border-radius: 3px;
      }
    `
  }

  updateSrc(newValue) {
    const img = this.shadow.getElementById('img')
    if (img) img.src = newValue
  }
}
    
customElements.define('c-tooltip-image', cTooltipImage)

