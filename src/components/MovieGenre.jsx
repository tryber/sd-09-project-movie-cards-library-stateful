import React from 'react';
import PropTypes from 'prop-types';

class MovieGenre extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label htmlFor="MovieGenre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ changeHandler }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

MovieGenre.propTypes = {
  value: PropTypes.string,
  changeHandler: PropTypes.func,
};

MovieGenre.defaultProps = {
  value: '',
  changeHandler: () => {},
};

export default MovieGenre;
