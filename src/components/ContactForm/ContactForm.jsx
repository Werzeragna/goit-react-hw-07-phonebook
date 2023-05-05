import { useState } from 'react';
import { StyledButton, StyledForm, StyledInput } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContact } from '../../redux/contactsFetch';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };
    const enterContacts =  contacts.some(
      i =>
        i.name.toLowerCase() === contact.name.toLowerCase() ||
        i.phone === contact.phone
    )
      enterContacts
        ? alert(`${name} is already in contacts`)
        : dispatch(addContact(contact));

    setName('');
    setPhone('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
    <StyledInput
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      value={name}
      onChange={handleChange}
      placeholder="Name"
      required
    />
    <StyledInput
      type="tel"
      name="phone"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      value={phone}
      onChange={handleChange}
      placeholder="Phone number"
      required
    />
    <StyledButton type="submit">Add contact</StyledButton>
  </StyledForm>
  );
};

