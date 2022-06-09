import axios from 'axios';

const BASE_URL = 'https://629e5b77c6ef9335c0b38872.mockapi.io/phonebook/';

export const fetchContacts = async () => {
  const config = {
    method: 'GET',
    url: `${BASE_URL}/contacts`,
    headers: { 'content-type': 'application/json' },
  };
  const response = await axios(config);
  return response.data;
};

export const addContact = async newContact => {
  const config = {
    method: 'POST',
    url: `${BASE_URL}/contacts`,
    headers: { 'content-type': 'application/json' },
    data: newContact,
  };

  const response = await axios(config);
  return response.data;
};

export const removeContact = async contactId => {
  const config = {
    method: 'DELETE',
    url: `${BASE_URL}/contacts/${contactId}`,
    headers: { 'content-type': 'application/json' },
  };

  const response = await axios(config);
  return response.data;
};
