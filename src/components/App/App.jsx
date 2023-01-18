import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import { Layout } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'Api/Api';
import { Button } from 'components/Button/Button';
import { NetflixLoader } from 'components/Loader/Loader';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = inputSearchName => {
    if (inputSearchName !== searchName) {
      setSearchName(inputSearchName);
      setItems([]);
      setPage(1);
    } else {
      setSearchName(inputSearchName);
    }
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }
    const findImages = async () => {
      try {
        setIsLoading(true);
        const images = await fetchImages(searchName, page);
        images.length === 0
          ? toast.error(
              'Sorry! There is no photo with this name. Try something else!',
              {
                position: 'top-center',
                duration: 2000,
              }
            )
          : setItems(items => [...items, ...images]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findImages();
  }, [page, searchName]);

  return (
    <Layout>
      <GlobalStyle />
      <Searchbar onSubmit={handleFormSubmit} />
      <Toaster />
      <ImageGallery items={items} />
      {isLoading && <NetflixLoader />}
      {items.length % 2 === 0 && items.length !== 0 ? (
        <Button onClick={() => setPage(() => page + 1)} />
      ) : (
        ''
      )}
    </Layout>
  );
};
