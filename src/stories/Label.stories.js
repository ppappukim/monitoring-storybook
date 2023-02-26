import { cLabel } from './Label';

export default {
  title: 'Example/Label',
  component: cLabel,
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
  template: `<c-label color="${args.color}" size="${args.size}" disabled=${args.disabled}>${args.label}</c-label>`,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  color: 'primary',
  size: 'medium',
  disabled: false,
};