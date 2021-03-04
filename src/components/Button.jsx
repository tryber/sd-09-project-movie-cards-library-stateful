import React from 'react';
import propTypes from 'prop-types';

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
Button.propTypes = {
  addMovieButton2: propTypes.func,
}.isRequired;

export default Button;
