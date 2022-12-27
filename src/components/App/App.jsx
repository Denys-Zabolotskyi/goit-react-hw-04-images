import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Layout } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchName: '',
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };
  render() {
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Toaster />
        <ImageGallery />
      </Layout>
    );
  }
}
