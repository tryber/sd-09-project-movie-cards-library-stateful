import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  rende() {
    const { genre, onChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectGenre;
