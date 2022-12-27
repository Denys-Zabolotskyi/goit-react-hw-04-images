import { Component } from 'react';
import { toast } from 'react-hot-toast';
// import PropTypes from 'prop-types';

import { AiOutlineSearch } from 'react-icons/ai';
import {
  SearchbarBox,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleNameChange = evt => {
    // console.log(evt.currentTarget.value);
    this.setState({ searchName: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchName.trim() === '') {
      // alert('Enter search name!');
      toast.error('Please, enter search word!', {
        position: 'top-center',
        duration: 2000,
      });
      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <AiOutlineSearch size={24} />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder={'Search images and photos'}
            value={this.state.searchName}
            onChange={this.handleNameChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}
