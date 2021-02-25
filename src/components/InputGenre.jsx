import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          id="genre"
          name="genre"
          type="text"
          value={ genre }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputGenre;
