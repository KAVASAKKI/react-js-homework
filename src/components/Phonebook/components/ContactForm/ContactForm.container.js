import actions from 'redux/phonebook/phonebook-actions';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: newContact => dispatch(actions.addContact(newContact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
