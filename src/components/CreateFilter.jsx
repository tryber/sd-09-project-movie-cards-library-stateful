import React from 'react';
import PropTypes from 'prop-types';

class CreateFilter extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="Select" data-testid="select-input-label">
      Filtrar por gênero
      <select
        id="Select"
        data-testid="select-input"
        value={ selectedGenre }
        onChange={ onSelectedGenreChange }
      >
        <option value="" data-testid="select-option">
          Todos
        </option>
        <option value="action" data-testid="select-option">
          Ação
        </option>
        <option value="comedy" data-testid="select-option">
          Comédia
        </option>
        <option value="thriller" data-testid="select-option">
          Suspense
        </option>
      </select>
    </label>
    );
  }
}

CreateFilter.propTypes = {
  value: PropTypes.oneOf(['string', 'number']).isRequired,
  funcRec: PropTypes.func.isRequired,
};

export default CreateFilter;
