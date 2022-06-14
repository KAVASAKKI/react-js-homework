import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import styles from './ChangeContactForm.module.css';
import { useEffect, useState } from 'react';

// const useLocalStorage = (
//   key,
//   changableContact,
//   defaultValue = { name: 'No name', number: 'No number' },
// ) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     console.log('Mount компонента ChangeContactForm');
//     if (changableContact) {
//       localStorage.setItem(key, JSON.stringify(changableContact));
//       setState(changableContact);
//     }
//   }, [changableContact, key, state]);

//   return [state, setState];
// };

export default function ChangeContactForm() {
  const allContacts = useSelector(contactsSelectors.getContacts);

  const { contactId } = useParams();
  const oldContact = allContacts.filter(contact => contact.id === contactId)[0];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(oldContact?.name || 'No name');
  const [number, setNumber] = useState(oldContact?.number || 'No number');

  useEffect(() => {
    const localStorageContact = JSON.parse(
      localStorage.getItem('changable-contact'),
    );

    if (name !== 'No name' && number !== 'No number') {
      localStorage.setItem(
        'changable-contact',
        JSON.stringify({ name, number }),
      );
      setName(name);
      setNumber(number);
      return;
    }

    if (localStorageContact) {
      setName(localStorageContact.name);
      setNumber(localStorageContact.number);
    }
  }, [name, navigate, number]);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(contactsOperations.changeContact({ id: contactId, name, number }));

    navigate('/contacts');
  };

  const onChange = ({ target: { name: type, value } }) =>
    type === 'name' ? setName(value) : setNumber(value);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={onChange}
          value={name}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          onChange={onChange}
          value={number}
        />
      </label>
      <button className={styles.button} type="submit">
        Change
      </button>
    </form>
  );
}
