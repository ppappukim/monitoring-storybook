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
    const style = document.createElement('style');
    this.appendChild(style);
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
      position: relative;
    }
    `
    this.querySelector('style').textContent = 
    `
    .resizer {
      position: absolute;
      top: 0;
      right: 0;
      width: 6px;
      cursor: col-resize;
      user-select: none;
      opacity: 0;
    }

    .resizer:hover,
    .resizing {
      border-right: 4px solid var(--color-primary);
      transition:opacity .3s;
      opacity:1;
    }
    `
  }
}
    
customElements.define('c-th', cTh)

