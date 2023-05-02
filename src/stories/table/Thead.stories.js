import { cThead } from './Thead';

export default {
  title: 'Example/Table',
  component: cThead,
  argTypes: {
  },
};

const Template = (args) => ({
  template: 
  `
    <c-thead>
      <c-tr>
        <c-td></c-td>
        <c-td></c-td>
        <c-td></c-td>
      </c-tr>
    </c-thead>
  `,
});

export const CThead = Template.bind({});
CThead.storyName = 'c-thead';