

export class cTooltip extends HTMLElement {
  static get observedAttributes() { 
    return [ 'position','disabled','checked' ]
  }

  constructor() {
    // Always call super first in constructor
    super();

    this.div = document.createElement('div')
    this.tooltip = null
    this.parent = null

    // this.style.display = 'none'

    this._left = 0
    this._right = 0
    this._top = 0
    this._bottom = 0

    const style = document.createElement('style');
    this.div.appendChild(style);
  }

  connectedCallback() {
    this.updateInit()
    this.updateSize()
    // this.updatePosition()
    this.updateChecked()
  }
  rerederedCallback() {
    console.log('rerederedCallback');
    
  }
  async attributeChangedCallback (atr, oldValue, newValue){
    console.log(atr);
    switch (atr) {
      case 'size':
        this.updateSize(newValue)
        break;
      case 'position':
        await this.updateInit()
        this.updatePosition(newValue)
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
    // this.div.style.position = 'absolute'
    // this.div.style.position = 'absolute'
    // this.div.style.position = 'absolute'
    const id = this.div.id;
    this.div.querySelector('style').textContent = 
    `
      #${id} {
        position: absolute;
        color: var(--color-text-high);
        background-color: var(--color-black-opacity-9);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;
        padding: 10px;
        font-size: 13px;
        font-weight: 500;
        border-radius: 3px;
        left: ${this._left};
        right: ${this._right};
        top: ${this._top};
        bottom: ${this._bottom};
      }
    `
  }

  async updateInit() {
    if (!window.tooltipId) window.tooltipId = 1
    else window.tooltipId = window.tooltipId + 1

    this.setAttribute('id', `tooltip-id-${window.tooltipId}`);

    this.tooltip = document.getElementById(`tooltip-id-${window.tooltipId}`)
    const children = Array.from(this.children)
    

    const treeWalker = document.createTreeWalker(
      this,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let textNode;
    let text;
    while (textNode = treeWalker.nextNode()) {
      if (textNode) {
        text = textNode 
        break
      }
    }

    this.div.append(text)
    children.forEach(child => {
      this.div.appendChild(child);
    });

    this.div.setAttribute('id', '--chekt-tooltip')

    console.log(this.tooltip);
    if (!this.tooltip) return
    this.parent = this.tooltip.parentNode;
    console.log(this.parent);
    this.parent.addEventListener('mouseenter', (e) => {
      document.body.appendChild(this.div)
    })
    this.parent.addEventListener('mouseleave', () => {
      // document.body.removeChild(this.div)
    })
  }

  updateSize(newValue) {
    switch (newValue) {
      case 'large':
        this._padding = '0 14px'
        this._fontSize = '18px'
        this._lineHeight = '42px'
        break
      case 'medium':
        this._padding = '0 10px'
        this._fontSize = '14px'
        this._lineHeight = '36px'
        break
      case 'small':
        this._padding = '0 7px'
        this._fontSize = '12px'
        this._lineHeight = '28px'
        break
      default:
        break;
    }
    this.updateStyle()
  }
  updatePosition(newValue) {
    if (!this.parent) return
    const parentRect = this.parent.getBoundingClientRect()
    const div = this.div.getBoundingClientRect()
    switch (newValue) {
      case 'top-center':
        this._left = parentRect.left + 'px'
        this._top = parentRect.top + 'px'
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
    
customElements.define('c-tooltip', cTooltip)

