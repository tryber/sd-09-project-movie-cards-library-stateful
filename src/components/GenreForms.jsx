import React from 'react';
import PropTypes from 'prop-types';

class GenreForms extends React.Component {
  render() {
    const { genre, stateChange } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-input"
          value={ genre }
          data-testid="genre-input"
          onChange={ stateChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreForms.propTypes = {
  genre: PropTypes.string.isRequired,
  stateChange: PropTypes.func.isRequired,
};

export default GenreForms;
