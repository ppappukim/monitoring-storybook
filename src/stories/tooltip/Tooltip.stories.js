import { cTooltip } from './Tooltip';

export default {
  title: 'Example/Tooltip',
  component: cTooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'text' },
    },
    position: {
      control: { type: 'radio' },
      options: ['left-center', 'right-center', 'top-center', 'bottom-center'],
    },
  },
};

const Template = (args) => ({
  template: 
  `
    <div>
      Hover Me
      <c-tooltip position="${args.position}" >
        this is my tooltip!
      </c-tooltip>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  position: 'top-center',
  size: 'medium',
};