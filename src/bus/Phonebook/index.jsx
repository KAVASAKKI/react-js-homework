import { useState } from 'react';
import {
  Container,
  ContactForm,
  ContactList,
  Filter,
  Section,
} from './components';

export default function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function addContact(newContact) {
    const isExist = contacts.find(contact => contact.name === newContact.name);

    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      setContacts(prevState => [...prevState, newContact]);
    }
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  const filterableContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Container>
      <Section color="teal" title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>

      <Section color="teal" title="Contacts">
        <Filter onChange={setFilter} value={filter} />

        <ContactList
          deleteContact={deleteContact}
          contacts={filterableContacts}
        />
      </Section>
    </Container>
  );
}
