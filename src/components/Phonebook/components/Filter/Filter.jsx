import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ onChange, value }) => (
  <Label>
    Find contacts by name
    <Input type="text" name="filter" onChange={onChange} value={value}></Input>
  </Label>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
