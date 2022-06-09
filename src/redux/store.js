import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/phonebook-reducer';
// import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  // middleware: [logger],
});
