import React, { Component } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallerystyled';

export class ImageGallery extends Component {
  state = {
    images: null,

    // isLoading: false,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://pixabay.com/api/?key=43582333-b71aa2f7f7d4d82dcec6d74cc&q=1&image_type=photo&orientation=horizontal&page=1&per_page=12`
      );
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('hello');

  //   const prevName = prevProps.searchName;
  //   const nextName = this.props.searchName;
  //   console.log('prevName', prevName);
  //   console.log('nextName', nextName);
  //   if (prevName !== nextName) {
  // fetch(
  //   `https://pixabay.com/api/?key=43582333-b71aa2f7f7d4d82dcec6d74cc&q=${nextName}&image_type=photo&orientation=horizontal&page=1&per_page=12`
  // )
  //   .then(res => res.json())
  //   .then(images => this.setState({ images }));
  // // .finally(() => this.setState({ loading: false }));
  // }

  render() {
    return (
      <List>
        {this.state.images && <ImageGalleryItem />}
        {/* <ImageGalleryItem key={image.id} /> */}
        {/* ))} */}
      </List>
    );
  }
}

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
