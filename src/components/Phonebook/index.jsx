import { Component } from 'react';
import {
  Container,
  ContactForm,
  ContactList,
  Filter,
  Section,
} from './components';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    contacts && this.setState({ contacts });
  }

  componentDidUpdate(prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = newContact => {
    const isExist = this.state.contacts.find(
      contact => contact.name === newContact.name,
    );

    isExist
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Section color="teal" title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section color="teal" title="Contacts">
          <Filter onChange={this.changeFilter} value={filter} />

          <ContactList
            deleteContact={this.deleteContact}
            contacts={visibleContacts}
          />
        </Section>
      </Container>
    );
  }
}
export default Phonebook;
