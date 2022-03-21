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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

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
