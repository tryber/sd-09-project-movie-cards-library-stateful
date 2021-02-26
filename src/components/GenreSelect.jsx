import React from 'react';
import { func, string } from 'prop-types';

class GenreSelect extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="selectGenre" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          name="genre"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreSelect.propTypes = {
  value: string,
  handleChange: func,
};

GenreSelect.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default GenreSelect;
