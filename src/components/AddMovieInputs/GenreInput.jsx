import React from 'react';
import PropTypes from 'prop-types';

export default function GenreInput({ genre, onChange }) {
  return (
    <label htmlFor="select-genre" data-testid="genre-input-label">
      Gênero
      <select
        data-testid="genre-input"
        value={ genre }
        onChange={ (ev) => onChange(ev.target.value) }
        id="select-genre"
      >
        <option data-testid="genre-option" value="action">Ação</option>
        <option data-testid="genre-option" value="comedy">Comédia</option>
        <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
  );
}

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
