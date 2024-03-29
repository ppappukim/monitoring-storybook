export class cThead extends HTMLElement {
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
        color: rgba(55, 53, 47, 0.65);
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
        background-color: var(--color-white);
        box-shadow: inset 0px -1px rgb(233, 233, 231);
      }
    `
  }
}
    
customElements.define('c-thead', cThead)

