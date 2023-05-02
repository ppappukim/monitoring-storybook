import { cTbody } from './Tbody';

export default {
  title: 'Example/Table',
  component: cTbody,
  argTypes: {
  },
};

const Template = (args) => ({
  template: 
  `
    <c-tbody>
      <c-tr>
        <c-td></c-td>
        <c-td></c-td>
        <c-td></c-td>
      </c-tr>
    </c-tbody>
  `,
});

export const CTbody = Template.bind({});
CTbody.storyName = 'c-tbody';