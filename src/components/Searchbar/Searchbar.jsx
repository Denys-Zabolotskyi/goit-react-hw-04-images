import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = evt => {
    const target = evt.currentTarget.value.toLowerCase();
    setSearchName(target);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchName.trim() === '') {
      toast.error('Please, enter search word!', {
        position: 'top-center',
        duration: 2000,
      });
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          <AiOutlineSearch size={24} />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleNameChange}
        />
      </SearchForm>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
