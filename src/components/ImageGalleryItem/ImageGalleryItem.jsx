import React from 'react';
import { Item, Iamge } from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({image}) => {
  const{id, src, alt} = image;

  return (
    <Item key={id}>
      <Iamge src={src} alt={alt} />
    </Item>
  );
};
