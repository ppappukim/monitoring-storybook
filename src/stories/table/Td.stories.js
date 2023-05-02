import { cTd } from './Td';

export default {
  title: 'Example/Table',
  component: cTd,
  argTypes: {
  },
};

const Template = (args) => ({
  template: 
  `
    <c-tr>
      <c-td></c-td>
      <c-td></c-td>
      <c-td></c-td>
    </c-tr>
  `,
});

export const CTd = Template.bind({});
CTd.storyName = 'c-td';