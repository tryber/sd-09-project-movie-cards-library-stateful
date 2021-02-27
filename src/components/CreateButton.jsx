import React from 'react';

class Button extends React.Component {
  render() {
    const { func } = this.props
    return (
      <button
        data-testid="send-button"
        onClick={ func }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
