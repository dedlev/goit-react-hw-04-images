import { Component } from 'react';
import { Overlay, Image } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyClose);
  }

  handleKeyClose = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    // const { children } = this.props;
    return (
      <Overlay onClick={this.handleClose}>
        <Image>
          <img src="" alt="" />
        </Image>
      </Overlay>
    );
  }
}
