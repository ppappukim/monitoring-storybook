export class cTh extends HTMLElement {
  static get observedAttributes() { 
    return []
  }

  constructor() {
    // Always call super first in constructor
    super();

    this.shadow = this.attachShadow({mode:'open'})
    const slot = document.createElement('slot');
    const style = document.createElement('style');
    this.shadow.appendChild(style);
    this.shadow.appendChild(slot);
  }

  connectedCallback() {
    this.updateStyle()
  }
  rerederedCallback() {
    
  }
  attributeChangedCallback (atr, oldValue, newValue){
  }

  disconnectedCallback() {
    
    // Custom square element removed from page.
  }
  adoptedCallback() {

    // Custom square element moved to new page.
  }

  updateStyle () {
    this.shadow.querySelector('style').textContent = 
    ` 
    :host {
      display: table-cell;
      white-space: inherit;
      padding: 10px;
      font-size: 14px;
      overflow: hidden;
    }
    `
  }
}
    
customElements.define('c-th', cTh)

