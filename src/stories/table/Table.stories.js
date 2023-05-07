import { cTable } from './Table';
import data from '../assets/sample.json';

export default {
  title: 'Example/Table',
  component: cTable,
  argTypes: {
    density: {
      control: { type: 'radio' },
      options: ['default', 'comfortable', 'compact'],
    },
    header: {
      control: { type: 'radio' },
      options: ['static', 'sticky'],
    },
    action: {
      control: { type: 'boolean' },
    },
    checkbox: {
      control: { type: 'boolean' },
    },
    expend: {
      control: { type: 'boolean' },
    },
    pagination: {
      control: { type: 'boolean' },
    },
    search: {
      control: { type: 'boolean' },
    },
    resize: {
      control: { type: 'boolean' },
    },
    data: [],
    // onClick: {},
  },
};

const Template = (args) => ({
  template: 
  `
  <c-table
  density="${args.density}"
  header="${args.header}"
  action="${args.action}"
  checkbox="${args.checkbox}"
  expend="${args.expend}"
  pagination="${args.pagination}"
  search="${args.search}"
  resize="${args.resize}">
    <c-thead>
      ${
        `<c-tr>${Object.keys(data[0]).map((k)=>(`<c-th>${k}</c-th>`)).join("")}</c-tr>`
      }
    </c-thead>
    <c-tbody>
      ${
        data.map((item) => (
          `<c-tr>${Object.keys(item).map((k)=>(
            `<c-td> ${ k === 'brand' ? `<c-label color="primary">${item[k]}</c-label>` : item[k]} </c-td>`
          )).join("")}</c-tr>`
        )).join("")
      }
    </c-tbody>
  </c-table>
  `
});

export const CTable = Template.bind({});
CTable.storyName = 'c-table';
CTable.args = {
  density: 'default',
  header: 'static',
  action: false,
  checkbox: false,
  expend: false,
  pagination: false,
  search: false,
  resize: false,
};