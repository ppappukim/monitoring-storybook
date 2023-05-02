export class cTbody extends HTMLElement {
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
    const tds = this.getElementsByTagName('c-td')
    for (let i = 0; i < tds.length; i++) {
      const td = tds[i];
      td.style.borderRight = `1px solid rgb(238, 238, 237)`
    }
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
        background: white;
        white-space: inherit;

        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
      }
    `
  }
}
    
customElements.define('c-tbody', cTbody)

