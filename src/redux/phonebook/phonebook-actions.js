import { ADD, CHANGE_FILTER, DELETE } from './phonebook-types';
import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => ({
  type: ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const removeContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  payload: value,
});
