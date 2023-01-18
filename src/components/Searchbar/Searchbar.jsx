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
  const [inputSearchName, setInputSearchName] = useState('');

  const handleNameChange = evt => {
    const target = evt.currentTarget.value.toLowerCase();
    setInputSearchName(target);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (inputSearchName.trim() === '') {
      toast.error('Please, enter search word!', {
        position: 'top-center',
        duration: 2000,
      });
      return;
    }
    onSubmit(inputSearchName);
    setInputSearchName('');
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
          value={inputSearchName}
          onChange={handleNameChange}
        />
      </SearchForm>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
