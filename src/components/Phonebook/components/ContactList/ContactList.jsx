import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookOperations from 'redux/phonebook/phonebook-operations';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import { Notification } from '../../components';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length ? (
        <ul className={styles.list}>
          {contacts.map(contact => (
            <li className={styles.item} key={contact.id}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.number}>{contact.phone}</span>

              <button
                className={styles.button}
                type="button"
                onClick={() => {
                  dispatch(phonebookOperations.removeContact(contact.id));
                }}
              >
                Del
              </button>
            </li>
          ))}
        </ul>
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
