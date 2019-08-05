import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SearchContainer, SearchField } from '../styles/SearchStyles';

const Search = () => {
  const query = useSelector(state => state.query);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({ type: 'SEARCH', text: e.target.value });
    dispatch({ type: 'FIRST_PAGE' });
  };

  return (
    <SearchContainer>
      <SearchField
        autoFocus
        onChange={handleChange}
        type="text"
        value={query}
        placeholder="Search for movie, tv or person..."
      />
    </SearchContainer>
  );
};

export default Search;
