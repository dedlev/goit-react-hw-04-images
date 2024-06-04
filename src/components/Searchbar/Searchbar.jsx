import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
// import PropTypes from 'prop-types';
import {
  SearchbarHeader,
  Form,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      return alert('Введіть назву зображень!');
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ImSearch />
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleNameChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarHeader>
    );
  }
}
