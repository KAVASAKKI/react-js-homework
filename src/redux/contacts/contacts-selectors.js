const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;

const getVisibleContacts = state => {
  const filter = getFilter(state);
  const allContacts = getContacts(state);
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const selectors = { getFilter, getContacts, getVisibleContacts };
export default selectors;
