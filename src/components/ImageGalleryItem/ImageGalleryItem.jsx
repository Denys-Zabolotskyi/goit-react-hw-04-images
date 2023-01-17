import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <GalleryImage src={webformatURL} alt={tags} onClick={toggleModal} />
      {showModal && (
        <Modal image={largeImageURL} tags={tags} onClose={toggleModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
