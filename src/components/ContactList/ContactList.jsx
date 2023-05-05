import {
  StyledButton,
  StyledContactItem,
  StyledContactList,
  StyledUser,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const onfilter = useSelector(getFilter);

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(onfilter.toLowerCase())
    );
  };
  const filteredContacts = findContacts();

  return (
    <StyledContactList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <StyledContactItem key={id}>
            <StyledUser>
              {name}:{number}
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
    </StyledContactList>
  );
};
