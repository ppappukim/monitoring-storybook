import { cButton } from './Button.js';

export default {
  title: 'Example/Button',
  component: cButton,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'danger', 'warning', 'white', 'black'],
    },
    type: {
      control: { type: 'radio' },
      options: ['fill', 'outline'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    // onClick: {},
  },
};

const Template = (args) => ({
  // components: { cktButton },
  // setup() {
  //   return { args };
  // },
  template: `<c-button type="${args.type}" color="${args.color}" size="${args.size}" disabled=${args.disabled}>${args.label}</c-button>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  type: 'fill',
  color: 'primary',
  size: 'medium',
  disabled: false,
};