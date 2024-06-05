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
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return alert('Введіть назву зображень!');
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ImSearch style={{ fontSize: 20 }} />
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            name="searchName"
            value={this.state.query}
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

