export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const filter = getFilter(state);
  const allContacts = getContacts(state);

  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};
