import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

export const Modal = ({ onClose, image, tags }) => {
  const handleClickOnOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };
  useEffect(() => {
    const handleClickEscape = evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClickEscape);

    return () => {
      window.removeEventListener('keydown', handleClickEscape);
    };
  }, [onClose]);

  return (
    <Overlay>
      <ModalContainer onClick={handleClickOnOverlay}>
        <ModalImage src={image} alt={tags} />
      </ModalContainer>
    </Overlay>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
