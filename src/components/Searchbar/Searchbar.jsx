import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonLabel,
  Form,
  Input,
  SearchBarHeader,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return Notiflix.Notify.warning('Please enter a search query.');
    }
    onSubmit(query);
    setQuery('');
  };

  const handleNameChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <SearchBarHeader>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ImSearch style={{ fontSize: 20 }} />
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          name="searchName"
          value={query}
          onChange={handleNameChange}
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchBarHeader>
  );
};

SearchBar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
