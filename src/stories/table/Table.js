

export class cTable extends HTMLElement {
  static get observedAttributes() { 
    return ['expend', 'resize']
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
    switch (atr) {
      case 'expend':
        this.updateExpend(newValue)
        break;
      case 'resize':
        this.updateResize(newValue)
        break;
      case 'checked':
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
        this.style.whiteSpace = 'normal'
        break
    }
  }

  updateResize(newValue) {
    console.log(newValue);
    switch (newValue) {
      case 'true':
      const tds = this.querySelectorAll('c-td');

      // Loop over them
      [].forEach.call(tds, (col) => {
        console.log(col);
          // Create a resizer element
          const resizer = document.createElement('div');
          resizer.classList.add('resizer');

          // Set the height
          resizer.style.height = `${this.offsetHeight}px`;

          // Add a resizer element to the column
          col.appendChild(resizer);

          // Will be implemented in the next section
          this.createResizableColumn(col, resizer);
      });
        break
      case 'false':
        break
    }
  }

  updateStyle() {
    this.shadow.querySelector('style').textContent = 
    `
      :host{
        position:relative;
        width: 100%;
        max-width:100px;
        display: table;
        box-sizing: border-box;
        text-indent: initial;
        border-collapse: collapse;
      }
      .resizer {
          /* Displayed at the right side of column */
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          cursor: col-resize;
          user-select: none;
      }
      .resizer:hover,
      .resizing {
          border-right: 2px solid blue;
      }
    `
  }

  createResizableColumn(col, resizer) {
      // Track the current position of mouse
      let x = 0;
      let w = 0;

      const mouseDownHandler = function (e) {
          // Get the current mouse position
          x = e.clientX;

          // Calculate the current width of column
          const styles = window.getComputedStyle(col);
          w = parseInt(styles.width, 10);

          // Attach listeners for document's events
          document.addEventListener('mousemove', mouseMoveHandler);
          document.addEventListener('mouseup', mouseUpHandler);
          
          resizer.classList.add('resizing');
      };

      const mouseMoveHandler = function (e) {
          // Determine how far the mouse has been moved
          const dx = e.clientX - x;

          // Update the width of column
          col.style.width = `${w + dx}px`;
      };

      // When user releases the mouse, remove the existing event listeners
      const mouseUpHandler = function () {
          document.removeEventListener('mousemove', mouseMoveHandler);
          document.removeEventListener('mouseup', mouseUpHandler);

          resizer.classList.remove('resizing');
      };

      resizer.addEventListener('mousedown', mouseDownHandler);
  };



}
    
customElements.define('c-table', cTable)

