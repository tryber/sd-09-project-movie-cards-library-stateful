import React from 'react';
import PropTypes from 'prop-types';

class GenreAddMovie extends React.Component {
  render() {
    const { value, handleFormFieldChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          id="genre"
          value={ value }
          onChange={ handleFormFieldChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="Suspense">thriller</option>
        </select>
      </label>
    );
  }
}

GenreAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleFormFieldChange: PropTypes.func.isRequired,
};

export default GenreAddMovie;
