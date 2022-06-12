import {
  Container,
  ContactForm,
  ContactList,
  Filter,
  Section,
} from 'components';

export default function ContactsPage() {
  return (
    <Container>
      <Section color="teal" title="Phonebook">
        <ContactForm />
      </Section>

      <Section color="teal" title="Contacts">
        <Filter />

        <ContactList />
      </Section>
    </Container>
  );
}
