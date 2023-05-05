import { useDispatch, useSelector } from 'react-redux';
import { StyledInput, StyledLabel } from './Filter.styled';
import { setFilter, getFilter } from '../../redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <StyledLabel>
      <StyledInput
        type="text"
        name={filter}
        value={filter}
        onChange={changeFilterInput}
        placeholder="Find contacts by name"
      />
    </StyledLabel>
  );
};
