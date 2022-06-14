import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

const addContact = createAsyncThunk('contacts/addContact', async credential => {
  const { data } = await axios.post('/contacts', credential);
  return data;
});

const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  },
);

const changeContact = createAsyncThunk(
  'contacts/changeContact',
  async ({ id, name, number }) => {
    const { data } = await axios.patch(`/contacts/${id}`, { name, number });
    console.log(data);
    return data;
  },
);

const operations = { fetchContacts, addContact, removeContact, changeContact };
export default operations;
