import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, ModalImage } from './Modal.styled';

export class Modal extends Component {
  handleClickEscape = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickOnOverlay = evt => {
    // console.log('e.currentTarget', evt.currentTarget);
    // console.log('e.target', evt.target);
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleClickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClickEscape);
  }

  render() {
    const { image, tags } = this.props;
    return (
      <Overlay>
        <ModalContainer onClick={this.handleClickOnOverlay}>
          <ModalImage src={image} alt={tags} />
        </ModalContainer>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
