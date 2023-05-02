import { cTh } from './Th'

export default {
  title: 'Example/Table',
  component: cTh,
  argTypes: {
  },
};

const Template = (args) => ({
  template: 
  `
    <c-th>
      <c-td></c-td>
      <c-td></c-td>
      <c-td></c-td>
    </c-th>
  `,
});

export const CTd = Template.bind({});
CTd.storyName = 'c-th';