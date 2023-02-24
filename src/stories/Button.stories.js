import cktButton from './Button.ce.vue';

export default {
  title: 'Example/Button',
  component: cktButton,
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'danger', 'warning'],
    },
  },
};

const Template = (args) => ({
  components: { cktButton },
  setup() {
    return { args };
  },
  template: '<ckt-button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  color: 'primary',
  size: 'medium',
  label: 'Button',
};