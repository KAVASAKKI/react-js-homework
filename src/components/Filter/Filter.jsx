import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        value={value}
      ></input>
    </label>
  );
}
