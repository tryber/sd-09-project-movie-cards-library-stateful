import React from 'react';
import { string, func } from 'prop-types';

class InputSearchGenre extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="searchSelect">
        Filtrar por gênero
        <select
          id="searchSelect"
          data-testid="select-input"
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputSearchGenre.propTypes = {
  selectedGenre: string,
  onSelectedGenreChange: func,
};

InputSearchGenre.defaultProps = {
  selectedGenre: '',
  onSelectedGenreChange: () => {},
};

export default InputSearchGenre;
