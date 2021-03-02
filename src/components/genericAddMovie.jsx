import React from 'react';
import PropTypes from 'prop-types';

class GenericAddMovie extends React.Component {
  render() {
    const { genre, handleChange, rating } = this.props;
    return (
      <form>
        <label
          htmlFor="avaliaçao"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            name="rating"
            type="number"
            id="avaliação"
            onChange={ handleChange }
            value={ rating }
            data-testid="rating-input"
          />
        </label>

        <label
          htmlFor="gen"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            value={ genre }
            name="genre"
            id="gen"
            onChange={ handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

GenericAddMovie.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};

export default GenericAddMovie;
