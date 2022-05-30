import PropTypes from 'prop-types';
import { Notification } from '../../components';
import actions from 'redux/phonebook/phonebook-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import { List, Item, Name, Number, Button } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

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
                  dispatch(actions.removeContact(contact.id));
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
