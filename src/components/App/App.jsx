import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { Layout } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'Api/Api';
import { Button } from 'components/Button/Button';
import { NetflixLoader } from 'components/Loader/Loader';
// import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
    items: [],
    isLoading: false,
  };

  handleFormSubmit = searchName => {
    // console.log(searchName);
    this.setState({ searchName, items: [], page: 1 });
  };

  findImages = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await fetchImages(this.state.searchName, this.state.page);
      // console.log(images);
      images.length === 0
        ? toast.error(
            'Sorry! There is no photo with this name. Try something else!',
            {
              position: 'top-center',
              duration: 2000,
            }
          )
        : this.setState(prevState => ({
            items: [...prevState.items, ...images],
          }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchName !== this.state.searchName
    ) {
      this.findImages();
    }
  }
  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { items, isLoading } = this.state;
    return (
      <Layout>
        <GlobalStyle />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Toaster />
        <ImageGallery items={items} />
        {isLoading && <NetflixLoader />}
        {items.length % 2 === 0 && items.length !== 0 ? (
          <Button onClick={this.loadMore} />
        ) : (
          ''
        )}
      </Layout>
    );
  }
}
