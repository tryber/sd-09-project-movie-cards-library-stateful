import React from 'react';

class Button extends React.Component {
  render() {
    const { addMovieButton2 } = this.props;
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ addMovieButton2 }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
