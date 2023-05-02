import { cTr } from './Tr';

export default {
  title: 'Example/Table',
  component: cTr,
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

export const CTr = Template.bind({});
CTr.storyName = 'c-tr';