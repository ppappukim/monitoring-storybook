import { cInput } from './Input';

export default {
  title: 'Example/Input',
  component: cInput,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
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
  template: `<c-input placeholder="${args.placeholder}" type="${args.text}" size="${args.size}" disabled=${args.disabled} checked=${args.checked}></c-input>`,
});

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Untitled',
  size: 'medium',
  disabled: false,
  checked: false,
};