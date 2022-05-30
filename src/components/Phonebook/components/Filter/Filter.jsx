import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/phonebook/phonebook-actions';
import { getFilter } from 'redux/phonebook/phonebook-selectors';
import { Label, Input } from './Filter.styled';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
        value={value}
      ></Input>
    </Label>
  );
}
