import { cTooltipImage } from './TooltipImage';

export default {
  title: 'Example/Tooltip',
  component: cTooltipImage,
  parameters: {
    // layout: 'centered',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  template: 
  `
    <c-tooltip-image src="${args.src}"></c-tooltip-image>
  `,
});

export const TooltipImage = Template.bind({});

TooltipImage.args = {
  src: 'https://picsum.photos/200/120',
};