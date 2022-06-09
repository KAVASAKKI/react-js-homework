import { createAsyncThunk } from '@reduxjs/toolkit';
import * as phonebookAPI from 'services/phonebook-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await phonebookAPI.fetchContacts();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number: phone }) => {
    const newContact = await phonebookAPI.addContact({ name, phone });
    return newContact;
  },
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    phonebookAPI.removeContact(contactId);
    return contactId;
  },
);
