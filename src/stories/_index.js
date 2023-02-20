import { defineCustomElement } from 'vue'
import Button from './Button.ce.vue'

console.log(Button.styles) // ["/* inlined css */"]

// convert into custom element constructor
const ButtonElement = defineCustomElement(Button)

// register
customElements.define('ckt-button', ButtonElement)