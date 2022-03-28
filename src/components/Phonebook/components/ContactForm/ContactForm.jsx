import { useState } from 'react';
import propTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';

export default function ContactForm({ addContact }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const { name, number } = state;

  function onSubmit(event) {
    event.preventDefault();

    addContact({
      id: nanoid(),
      name,
      number,
    });

    setState({ name: '', number: '' });
  }

  function onChange(event) {
    const { name: type, value } = event.target;

    setState(prevState => ({ ...prevState, [type]: value }));
  }

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
          value={name}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
          value={number}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};
