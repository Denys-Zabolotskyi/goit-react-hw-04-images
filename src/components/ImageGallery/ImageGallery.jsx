import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList, GalleryItem } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items }) => {
  return (
    <GalleryList>
      {items.map(({ id, ...restProps }) => (
        <GalleryItem key={id}>
          <ImageGalleryItem {...restProps} />
        </GalleryItem>
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
