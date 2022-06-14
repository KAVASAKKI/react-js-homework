import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations, contactsActions } from 'redux/contacts';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.fetchContacts.fulfilled](state, { payload }) {
      console.log('Получение всех контактов: добавляем в state все контакты');

      state.items = payload;
      state.isLoading = false;
    },
    [contactsOperations.fetchContacts.rejected](state) {
      state.isLoading = false;
    },

    [contactsOperations.addContact.fulfilled](state, { payload }) {
      console.log('Добавление контакта: добавляем в state новый контакт');

      state.items = [...state.items, payload];
      state.isLoading = false;
    },

    [contactsOperations.removeContact.fulfilled](state, { payload }) {
      console.log('Удаление контакта: очищаем state от лишнего контакта');

      state.items = state.items.filter(contact => contact.id !== payload);
      state.isLoading = false;
    },

    [contactsOperations.changeContact.fulfilled]() {
      console.log('Обновление контакта: обновляем state');
    },

    [contactsActions.changeFilter](state, { payload }) {
      console.log('Изменение фильтра: обновляем state');

      state.filter = payload;
    },
  },
});

export default contactsSlice.reducer;
