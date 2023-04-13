import { cInput } from './Input';

export default {
  title: 'Example/Input',
  component: cInput,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    // type: {
    //   control: { type: 'radio' },
    //   options: ['fill', 'outline'],
    // },
    disabled: {
      control: { type: 'boolean' },
    },
    checked: {
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
  template: `<c-input type='text' color="${args.color}" size="${args.size}" disabled=${args.disabled} checked=${args.checked}>${args.label}</c-input>`,
});

export const Default = Template.bind({});
Default.args = {
  label: '',
  color: 'primary',
  size: 'medium',
  disabled: false,
  checked: false,
};