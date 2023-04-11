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
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'danger', 'warning', 'alarm', 'relay', 'verification', 'restore', 'playback', 'note'],
    },
    // type: {
    //   control: { type: 'radio' },
    //   options: ['fill', 'outline'],
    // },
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
  template: `<c-input contenteditable color="${args.color}" size="${args.size}" disabled=${args.disabled}>${args.label}</c-input>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  color: 'primary',
  size: 'medium',
  disabled: false,
};