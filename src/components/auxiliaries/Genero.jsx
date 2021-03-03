import React from 'react';
import PropTypes from 'prop-types';

class Genero extends React.Component {
  render() {
    const { onValue, change } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genero">
        Gênero
        <select
          id="genero"
          type="text"
          value={ onValue }
          onChange={ change }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">
            Ação
          </option>
          <option value="comedy" data-testid="genre-option">
            Comédia
          </option>
          <option value="thriller" data-testid="genre-option">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  onValue: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default Genero;
