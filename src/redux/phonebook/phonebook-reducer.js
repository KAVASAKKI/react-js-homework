import { ADD, CHANGE_FILTER, DELETE } from './phonebook-types';
import { combineReducers } from 'redux';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsReducer = (state = initialState.contacts, { type, payload }) => {
  switch (type) {
    case ADD:
      const isExist = state.find(contact => contact.name === payload.name);

      if (isExist) {
        alert(`${payload.name} is already in contacts.`);
      } else {
        return [...state, payload];
      }
      break;

    case DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = initialState.filter, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
