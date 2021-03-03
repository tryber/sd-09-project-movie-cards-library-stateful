import React from 'react';
import PropTypes from 'prop-types';

const Genre = ({ value, onChange }) => (
  <label data-testid="genre-input-label" htmlFor="genre-input">
    Gênero
    <select
      name="genre"
      value={ value }
      data-testid="genre-input"
      onChange={ onChange }
    >
      <option value="action" data-testid="genre-option">Ação</option>
      <option value="comedy" data-testid="genre-option">Comédia</option>
      <option value="thriller" data-testid="genre-option">Suspense</option>
    </select>
  </label>
);

Genre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genre;
