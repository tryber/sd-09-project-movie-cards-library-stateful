import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { submitForm } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ submitForm }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
