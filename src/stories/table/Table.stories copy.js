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
    icon: {
      control: { type: 'boolean' },
    },
    thumbnail: {
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

function parseData(data, args) {
  let div = document.createElement('div');
  let table = document.createElement('c-table');
  let thaed = document.createElement('c-thead');
  let tbody = document.createElement('c-tbody');
  div.appendChild(table)
  table.appendChild(thaed)
  table.appendChild(tbody)

  //set attribute
  if (args.resize) table.setAttribute('resize', true)
  else if (!args.resize) table.setAttribute('resize', false)


  // for theader
  const item = data[0];
  let tr = document.createElement('c-tr');
  thaed.appendChild(tr)
  Object.keys(item).map(k => {
    let td = document.createElement('c-td');
    td.innerHTML = k
    tr.appendChild(td)
  })

  // for tbody
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    let tr = document.createElement('c-tr');
    tbody.appendChild(tr)
    Object.keys(item).map(k => {
      const v = item[k]

      if (k === 'brand') {
        let td = document.createElement('c-td');
        let label = document.createElement('c-label');
        label.setAttribute('color', 'primary')
        label.innerHTML = v
        td.appendChild(label)
        tr.appendChild(td)
      }
      else {
        let td = document.createElement('c-td');
        td.innerHTML = v
        tr.appendChild(td)
      }
    })
  }

  return div
}

const Template = (args) => ({
  template: parseData(data, args),
});

export const CTable = Template.bind({});
CTable.storyName = 'c-table';
CTable.args = {
  density: 'default',
  icon: false,
  thumbnail: false,
  checkbox: false,
  expend: false,
  pagination: false,
  search: false,
  resize: false,
};