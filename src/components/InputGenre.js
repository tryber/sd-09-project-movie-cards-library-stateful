import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputGenre extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        data-testid="select-input-label"
        htmlFor="id-genre"
      >
        Filtrar por gênero
        <div>
          <select
            data-testid="select-input"
            name="selectedGenre"
            id="id-genre"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </div>
      </label>
    );
  }
}

InputGenre.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default InputGenre;
