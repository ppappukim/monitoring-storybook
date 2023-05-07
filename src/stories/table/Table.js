

export class cTable extends HTMLElement {
  static get observedAttributes() { 
    return ['expend', 'resize', 'density', 'header']
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
    
    this.initResize()
    this.updateStyle()
  }
  rerederedCallback() {
    
  }
  attributeChangedCallback (atr, oldValue, newValue){
    switch (atr) {
      case 'expend':
        this.updateExpend(newValue)
        break;
      case 'resize':
        this.updateResize(newValue)
        break;
      case 'density':
        this.updateDensity(oldValue, newValue)
        break;
      case 'header':
        this.updateHeader(oldValue, newValue)
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

  updateExpend(newValue) {
    switch (newValue) {
      case 'true':
        this.style.whiteSpace = 'nowrap'
        break
      case 'false':
      default:
        this.style.whiteSpace = 'normal'
        break
    }
  }

  async initResize() {
    const ths = this.querySelectorAll('c-th');

    for (let i = 0; i < ths.length; i++) {
      const th = ths[i];
      const resizer = document.createElement('div');
      resizer.classList.add('resizer');
      resizer.style.height = `100%`;

      th.appendChild(resizer);

      this.createResizableColumn(th, resizer);
    }
  }


  updateResize(newValue) {
    const ths = this.querySelectorAll('c-th');
    switch (newValue) {

      case 'true':
        for (let i = 0; i < ths.length; i++) {
          const th = ths[i];
          th.style.pointerEvents = 'auto'
        }
        break

      case 'false':
      default:
        for (let i = 0; i < ths.length; i++) {
          const th = ths[i];
          th.style.pointerEvents = 'none'
        }
        
        break
    }
  }

  updateDensity(oldValue, newValue) {
    switch (newValue) {
      case 'default':
        this.classList.remove(`c-density-${oldValue}`)
        this.classList.add(`c-density-${newValue}`)
        break
      case 'comfortable':
        this.classList.remove(`c-density-${oldValue}`)
        this.classList.add(`c-density-${newValue}`)
        break
      case 'compact':
        this.classList.remove(`c-density-${oldValue}`)
        this.classList.add(`c-density-${newValue}`)
        break
    }
  }

  updateHeader(oldValue, newValue) {
    switch (newValue) {
      case 'static':
      default:
        this.classList.remove(`c-header-${oldValue}`)
        this.classList.add(`c-header-${newValue}`)
        break
      case 'sticky':
        this.classList.remove(`c-header-${oldValue}`)
        this.classList.add(`c-header-${newValue}`)
        break 
    }
  }

  updateStyle() {
    this.shadow.querySelector('style').textContent = 
    `
      :host{
        border-collapse: collapse;
        display: table;
        box-sizing: border-box;
        text-indent: initial;
        white-space: normal;
        line-height: normal;
        font-weight: normal;
        font-size: medium;
        font-style: normal;
        color: -internal-quirk-inherit;
        text-align: start;
        border-spacing: 2px;
        border-color: gray;
        font-variant: normal;
      }
    `
    this.querySelector('style').textContent = 
    `
      .c-density-default c-td{
        padding: 10px;
      }
      .c-density-comfortable c-td{
        padding: 14px;
      }
      .c-density-compact c-td{
        padding: 7px;
      }

      c-tbody c-tr {
        border-bottom: 1px solid rgb(233, 233, 231);
      }
      
      .c-density-default c-thead{
        padding: 10px;
      }

      .c-header-static c-thead{
        position: static;
      }
      .c-header-sticky c-thead{
        position: sticky;
        top: 0;
      }
    `
  }

  createResizableColumn(th, resizer) {
      // Track the current position of mouse
      let x = 0;
      let w = 0;

      const mouseDownHandler = function (e) {
          // Get the current mouse position
          x = e.clientX;

          // Calculate the current width of column
          const styles = window.getComputedStyle(th);
          w = parseInt(styles.width, 10);

          // Attach listeners for document's events
          window.addEventListener('mousemove', mouseMoveHandler);
          window.addEventListener('mouseup', mouseUpHandler);
          
          resizer.classList.add('resizing');
      };

      const mouseMoveHandler = function (e) {
          // Determine how far the mouse has been moved
          const dx = e.clientX - x;

          // Update the width of column
          th.style.minWidth = `${w + dx}px`;
      };

      // When user releases the mouse, remove the existing event listeners
      const mouseUpHandler = function () {
          window.removeEventListener('mousemove', mouseMoveHandler);
          window.removeEventListener('mouseup', mouseUpHandler);

          resizer.classList.remove('resizing');
      };

      resizer.addEventListener('mousedown', mouseDownHandler);
  };



}
    
customElements.define('c-table', cTable)

