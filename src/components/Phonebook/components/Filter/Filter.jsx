import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-actions';
import { Label, Input } from './Filter.styled';

function Filter({ onChange, value }) {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      ></Input>
    </Label>
  );
}

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
