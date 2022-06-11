import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'redux/phonebook/phonebook-actions';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        value={value}
      ></input>
    </label>
  );
}
