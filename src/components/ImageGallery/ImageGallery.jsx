import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallerystyled';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
