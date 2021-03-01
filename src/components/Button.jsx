import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { changeState } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ changeState }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
