import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contactsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const isExist = state.find(contact => contact.name === payload.name);

    if (isExist) {
      alert(`${payload.name} is already in contacts.`);
    } else {
      return [...state, payload];
    }
  },
  [actions.removeContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
