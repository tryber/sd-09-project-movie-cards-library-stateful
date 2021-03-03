import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const { value, changeState } = this.props;

    return (
      <label htmlFor="gender" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ changeState }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  value: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default SelectGenre;
