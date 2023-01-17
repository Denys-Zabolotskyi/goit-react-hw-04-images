// import { useState } from 'react';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { GalleryImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

////////////////////////HOOKS////////////////////
// export const ImageGalleryItem = () => {
//   const [ShowModal, setShowModal] = useState(second);
//   return (
//     <>
//       <GalleryImage src={webformatURL} alt={tags} onClick={this.toggleModal} />
//       {this.state.showModal && (
//         <Modal image={largeImageURL} tags={tags} onClose={this.toggleModal} />
//       )}
//     </>
//   );
// };

///////////////////////CLASS//////////////////////////

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    return (
      <>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal image={largeImageURL} tags={tags} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
