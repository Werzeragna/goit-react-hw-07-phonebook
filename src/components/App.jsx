import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledContainer, StyledSubtitle, StyledTitle } from './App.styled';

export const App = () => {
  return (
    <StyledContainer>
      <StyledTitle>Phonebook</StyledTitle>
      <ContactForm />
      <StyledSubtitle>Contacts</StyledSubtitle>
      <Filter />
      <ContactList />
    </StyledContainer>
  );
};
