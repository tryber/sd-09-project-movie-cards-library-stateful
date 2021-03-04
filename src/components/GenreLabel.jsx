import React from 'react';
import PropTypes from 'prop-types';

class GenreLabel extends React.Component {
  render() {
    const { genre, changeStateValue } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          id="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ changeStateValue }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreLabel.propTypes = {
  genre: PropTypes.string.isRequired,
  changeStateValue: PropTypes.func.isRequired,
};

export default GenreLabel;
