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
    delay: {
      control: { type: 'text' },
    },
    position: {
      control: { type: 'radio' },
      options: ['left-center', 'left-top', 'left-bottom', 'right-center', 'right-top', 'right-bottom', 'top-center', 'top-left', 'top-right', 'bottom-center', 'bottom-left', 'bottom-right'],
    },
    image: {
      control: { type: 'boolean' },
    },
  },
};

const imgElement = (isShow) => {
  if (isShow) return `<c-tooltip-image src="https://picsum.photos/200/120"></c-tooltip-image>`
  else return ''
};

const Template = (args) => ({
  template: 
  `
    <div style="display: inline-flex;">
      Hover Me
      <c-tooltip position="${args.position}" delay="${args.delay}">
        ${imgElement(args.image)}
        ${args.text}
      </c-tooltip>
    </div>
  `,
});

export const Default = Template.bind({});

Default.args = {
  text: 'This is my tooltip!',
  delay: '0.3',
  position: 'top-center',
  image: false,
};