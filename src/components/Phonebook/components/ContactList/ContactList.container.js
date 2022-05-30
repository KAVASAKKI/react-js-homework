import { connect } from 'react-redux';
import actions from 'redux/phonebook/phonebook-actions';
import ContactList from './ContactList';

const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(actions.removeContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
