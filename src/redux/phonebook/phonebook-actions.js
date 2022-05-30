import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contacts/addContact', ({ name, number }) => ({
  payload: { id: nanoid(), name, number },
}));

const removeContact = createAction('contacts/removeContact');

const changeFilter = createAction('contacts/changeFilter');

const actions = { addContact, removeContact, changeFilter };

export default actions;
