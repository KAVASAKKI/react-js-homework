import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Notification } from 'components';
import styles from './ContactList.module.css';
import { Link } from 'react-router-dom';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {contacts.length ? (
        <ul className={styles.list}>
          {contacts.map(contact => (
            <li className={styles.item} key={contact.id}>
              <Link className={styles.link} to={contact.id}>
                <span className={styles.name}>{contact.name}</span>
                <span className={styles.number}>{contact.number}</span>
              </Link>

              <button
                className={styles.button}
                type="button"
                onClick={() => {
                  dispatch(contactsOperations.removeContact(contact.id));
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
