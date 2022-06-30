import React from 'react';
import { ContactList } from 'components';

const Stories = {
  title: 'ContactList',
  component: ContactList,
};
export default Stories;

const Template = args => <ContactList {...args} />;

export const Default = Template.bind({});

Default.args = {
  contacts: [{ id: 1, name: 'Pavlik', number: '380931055084' }],
};
