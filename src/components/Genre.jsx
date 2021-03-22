import React from 'react';
import PropTypes from 'prop-types';

export default class Genre extends React.Component {
  render() {
    const { genre, callback } = this.props;
    return (
      <div>
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            id="genre"
            value={ genre }
            onChange={ callback }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
