import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddGenre extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="genre-input-label"
          htmlFor="id-genre"
        >
          Gênero
          <div>
            <select
              data-testid="genre-input"
              name="genre"
              id="id-genre"
              value={ genre }
              onChange={ handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </div>
        </label>
      </div>
    );
  }
}

AddGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddGenre;
