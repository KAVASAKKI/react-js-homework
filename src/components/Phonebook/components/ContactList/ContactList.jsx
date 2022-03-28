import PropTypes from 'prop-types';
import { Notification } from '../../components';
import { List, Item, Name, Number, Button } from './ContactList.styled';

export default function ContactList({ deleteContact, contacts }) {
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
