

export class cTooltip extends HTMLElement {
  static get observedAttributes() { 
    return [ 'position','delay' ]
  }

  constructor() {
    // Always call super first in constructor
    super();

    this.div = document.createElement('div')
    this.tooltip = null
    this.parent = null
    this.position = null
    this.isImageLoaded = false
    this.isWithImage = false
    this.mouseHovering = false

    this._left = null
    this._right = null
    this._top = null
    this._bottom = null

    const style = document.createElement('style');
    this.div.appendChild(style);
  }

  async connectedCallback() {
    await this.updateInit()
    this.updatePosition()
  }
  rerederedCallback() {
  }
  async attributeChangedCallback (atr, oldValue, newValue){
    switch (atr) {
      case 'position':
        await this.updateInit()
        this.position = newValue
        this.updatePosition(newValue)
        break;
      case 'delay':
        this.updateDelay(newValue)
        break;
      default:
        break;
    }
  }

  disconnectedCallback() {
  }
  adoptedCallback() {
  }

  updateStyle () {
    const id = this.div.id;
    this.div.querySelector('style').textContent = 
    `
      #${id} {
        position: absolute;
        pointer-events: none;
        color: var(--color-text-high);
        background-color: var(--color-black);
        max-width: 200px;
        padding: 7px;
        font-size: 13px;
        font-weight: 600;
        border-radius: 3px;
        word-break: break-word;
        line-height: 18px;

        left: ${this._left};
        right: ${this._right};
        top: ${this._top};
        bottom: ${this._bottom};

        visibility: hidden;
        animation-name: fadein;
        animation-duration: 1s; /* For animation working required event if not using duration*/
        animation-fill-mode: both;
      }

      @keyframes fadein {
        from {
          visibility: hidden;
        }
      
        to {
          visibility: visible;
        }
      }
    `
  }

  async updateInit() {
    if (!window.tooltipId) window.tooltipId = 1
    else window.tooltipId = window.tooltipId + 1

    this.setAttribute('id', `tooltip-id-${window.tooltipId}`);

    this.tooltip = document.getElementById(`tooltip-id-${window.tooltipId}`)

    const children = Array.from(this.childNodes)

    // tooltip안에 tag가 2개이상 있을경우.. 
    if (children.length > 1) {
      this.div.style.display = 'flex'
      this.div.style.flexDirection = 'column'
      this.div.style.gap = '5px'
    }

    children.forEach(child => {
      if (child.tagName === 'C-TOOLTIP-IMAGE') {
        this.isWithImage = true
        const imgEl = child.shadowRoot.getElementById('img')
        if (imgEl) imgEl.addEventListener('load', () => {
          this.isImageLoaded = true
          if (this.mouseHovering) {
            this.parent.style.cursor = 'auto'
            if (this.div) document.body.appendChild(this.div)
            this.updatePosition()
          }
          console.log('load!');
        })
        if (imgEl) imgEl.addEventListener('error', () => {
          this.isImageLoaded = true
          if (this.mouseHovering) {
            this.parent.style.cursor = 'auto'
            if (this.div) document.body.appendChild(this.div)
            this.updatePosition()
          }
          console.log('load!');
        })
      }
      this.div.appendChild(child);
    });

    this.div.setAttribute('id', '--chekt-tooltip')

    if (!this.tooltip) return
    this.parent = this.tooltip.parentNode;
    this.parent.addEventListener('mouseenter', () => {
      this.mouseHovering = true
      if (this.isWithImage && !this.isImageLoaded) return this.parent.style.cursor = 'progress'
      if (this.div) document.body.appendChild(this.div)
      this.updatePosition()
    })
    this.parent.addEventListener('mouseleave', () => {
      this.parent.style.cursor = 'auto'
      this.mouseHovering = false
      if (this.isWithImage && !this.isImageLoaded) return
      if (this.div) document.body.removeChild(this.div)
    })
  }

  updateDelay(newValue) {
    this.div.style.animationDelay = `${newValue}s`
  }

  updatePosition(newValue) {
    if (!this.parent) return
    if (!this.div) return

    let left, right, top, bottom
    const parentRect = this.parent.getBoundingClientRect()
    const div = this.div.getBoundingClientRect()
    if (!newValue) newValue = this.position
    switch (newValue) {
      // left
      case 'left-center':
        if ((parentRect.left - div.width) < 0) left = parentRect.right + 5
        else left  = parentRect.left - div.width - 5
        top  = (parentRect.top + parentRect.height/2) - div.height/2

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'left-top':
        left  = parentRect.left - div.width - 5
        top  = parentRect.top

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'left-bottom':
        left  = parentRect.left - div.width - 5
        top  = parentRect.bottom - div.height

        this._left = left + 'px'
        this._top = top + 'px'
        break

      // right
      case 'right-center':
        left  = parentRect.right + 5
        top  = (parentRect.top + parentRect.height/2) - div.height/2

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'right-top':
        left  = parentRect.right + 5
        top  = parentRect.top

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'right-bottom':
        left  = parentRect.right + 5
        top  = parentRect.bottom - div.height

        this._left = left + 'px'
        this._top = top + 'px'
        break

      // top
      case 'top-center':
        left  = (parentRect.left + parentRect.width/2) - div.width/2
        top  = parentRect.top - div.height - 5

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'top-left':
        left  = parentRect.left
        top  = parentRect.top - div.height - 5

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'top-right':
        left  = parentRect.right - div.width
        top  = parentRect.top - div.height - 5

        this._left = left + 'px'
        this._top = top + 'px'
        break

      // bottom
      case 'bottom-center':
        left  = (parentRect.left + parentRect.width/2) - div.width/2
        top  = parentRect.bottom + 5

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'bottom-left':
        left  = parentRect.left
        top  = parentRect.bottom + 5

        this._left = left + 'px'
        this._top = top + 'px'
        break
      case 'bottom-right':
        left  = parentRect.right - div.width
        top  = parentRect.bottom + 5

        this._left = left + 'px'
        this._top = top + 'px'
        break
    }
    this.updateStyle()
  }
}
    
customElements.define('c-tooltip', cTooltip)

