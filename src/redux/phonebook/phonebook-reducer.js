import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './phonebook-operations';
import * as actions from './phonebook-actions';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => [...state, payload],

  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.fulfilled]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,

  [addContact.fulfilled]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,

  [removeContact.fulfilled]: () => null,
  [removeContact.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
  isLoading,
  error,
});
