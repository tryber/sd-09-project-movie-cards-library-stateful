import React from 'react';
import PropTypes from 'prop-types';

class GenreMovie extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreMovie.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default GenreMovie;
