import { cTooltip } from './Tooltip';

export default {
  title: 'Example/Tooltip',
  component: cTooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
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
    <div style="display: inline-flex;">
      Hover Me
      <c-tooltip position="${args.position}">
        ${args.text}
      </c-tooltip>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  text: 'This is my tooltip!',
  position: 'top-center',
  size: 'medium',
};