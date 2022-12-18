// import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <SearchbarBox>
      <SearchForm action="">
        <SearchFormButton type="submit">
          <AiOutlineSearch size={24} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder={'Search images and photos'}
        />
      </SearchForm>
    </SearchbarBox>
  );
};
