import {
  Contacts,
  StyledButton,
  StyledContactItem,
  StyledUser,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  deleteContact,
} from '../../redux/contactsFetch';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onfilter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(onfilter.toLowerCase())
  );

  return (
    <Contacts>
      {filteredContacts.map(({ id, name, phone }) => {
        return (
          <StyledContactItem key={id}>
            <StyledUser>
              {name}:{phone}
            </StyledUser>
            <StyledButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </StyledButton>
          </StyledContactItem>
        );
      })}
    </Contacts>
  );
};
