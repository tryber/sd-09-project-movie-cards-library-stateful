import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onclick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
