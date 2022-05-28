import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact } from 'redux/phonebook/phonebook-actions';
import { Notification } from '../../components';
import { List, Item, Name, Number, Button } from './ContactList.styled';

function ContactList({ deleteContact, contacts }) {
  return (
    <>
      {contacts.length ? (
        <List>
          {contacts.map(contact => (
            <Item key={contact.id}>
              <Name>{contact.name}</Name>
              <Number>{contact.number}</Number>

              <Button
                type="button"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                Del
              </Button>
            </Item>
          ))}
        </List>
      ) : (
        <Notification message="Contacts not found" />
      )}
    </>
  );
}

const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(removeContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
