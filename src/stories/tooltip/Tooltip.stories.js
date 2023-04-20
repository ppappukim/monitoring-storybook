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
      options: ['left-center', 'right-center', 'top-center', 'bottom-center'],
    },
    image: {
      control: { type: 'boolean' },
    },
  },
};

const imgElement = (isShow) => {
  console.log(isShow);
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