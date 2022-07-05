import { Component } from 'react';
import { nanoid } from 'nanoid';
import { TContact } from 'types/types';
import { Form, Label, Input, Button } from './ContactForm.styled';

interface Props {
  addContact: (state: TContact) => void;
}

interface State {
  name: string;
  number: string;
}

class ContactForm extends Component<Props, State> {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      this.setState({ name: value });
    }

    if (name === 'number') {
      this.setState({ number: value });
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    this.props.addContact({
      ...this.state,
      id: nanoid(),
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            value={number}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
