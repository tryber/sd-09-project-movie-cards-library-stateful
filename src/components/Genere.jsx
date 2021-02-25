import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genere extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="genere" data-testid="genre-input-label">
        Gênero
        <select
          name="genere"
          itemID="genere"
          data-testid="genre-input"
          value={ value }
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

const { string, func } = PropTypes;
Genere.propTypes = {
  value: string.isRequired,
  handleChange: func.isRequired,
};

export default Genere;
