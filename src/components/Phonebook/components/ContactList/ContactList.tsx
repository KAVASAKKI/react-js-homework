import { Notification } from 'components';
import { TContact } from 'types/types';
import { List, Item, Name, Number, Button } from './ContactList.styled';

interface Props {
  deleteContact: (contactId: string) => void;
  contacts: TContact[];
}

const ContactList = ({ deleteContact, contacts }: Props) => (
  <>
    {contacts.length ? (
      <List>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <Name>{contact.name}</Name>
            <Number>{contact.number}</Number>

            <Button
              type="button"
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Del
            </Button>
          </Item>
        ))}
      </List>
    ) : (
      <Notification message="Contacts not found" />
    )}
  </>
);

export default ContactList;
