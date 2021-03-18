import React from 'react';
import PropTypes from 'prop-types';

class ButtonAddMovie extends React.Component {
  render() {
    const { manipulatesStateAddMovies, manipulatesStateMoviesLibrary } = this.props;
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ () => manipulatesStateAddMovies(manipulatesStateMoviesLibrary) }
      >
        Adicionar filme
      </button>
    );
  }
}

ButtonAddMovie.propTypes = {
  manipulatesStateAddMovies: PropTypes.func.isRequired,
  manipulatesStateMoviesLibrary: PropTypes.func.isRequired,
};

export default ButtonAddMovie;
