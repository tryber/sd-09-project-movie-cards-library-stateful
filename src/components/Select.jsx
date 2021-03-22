import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="SelectAndOptions">
        Filtrar por gênero
        <select
          id="SelectAndOptions"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value=""> Todos </option>
          <option data-testid="select-option" value="action"> Ação </option>
          <option data-testid="select-option" value="comedy"> Comédia </option>
          <option data-testid="select-option" value="thriller"> Suspense </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
