import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={ onClick } data-testid="send-button">
        Adicionar filme
      </button>
    );
  }
}

export default Button;
