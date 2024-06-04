import React, { Component } from 'react';
import axios from 'axios';
import { GlobalStyle } from './GlobalStyle';
import { Appstyled } from './Appstyled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevprops, prevState) {
    if (prevState !== this.state.query || prevState !== this.state.page) {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=43582333-b71aa2f7f7d4d82dcec6d74cc&q=1&image_type=photo&orientation=horizontal&page=&{page}&per_page=12`
        );
        this.setState({ images: response.data.images });
      } catch (error) {
        console.log(error);
        //   } finally () {
        //     this.setState(this.state.isLoading: false;)
      }
    }
  }
  j;

  handleSubmit = newQuery => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <Appstyled>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchName={this.state.searchName} />
        <Button onClick={this.handleLoadMore} />
        <GlobalStyle />
      </Appstyled>
    );
  }
}

// Your API key: 43582333-b71aa2f7f7d4d82dcec6d74cc
