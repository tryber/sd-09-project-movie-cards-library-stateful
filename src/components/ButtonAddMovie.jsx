import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { manipulatesStateAddMovies, onClick } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ () => manipulatesStateAddMovies(onClick) }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  manipulatesStateAddMovies: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
