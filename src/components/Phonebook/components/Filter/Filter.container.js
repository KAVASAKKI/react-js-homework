import { connect } from 'react-redux';
import actions from 'redux/phonebook/phonebook-actions';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
