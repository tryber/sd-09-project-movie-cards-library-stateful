import React from 'react';
import PropTypes from 'prop-types';

class SelectGender extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="gil">
        Gênero
        <select
          data-testid="genre-input"
          value={ value }
          onChange={ handleChange }
          htmlFor="gil"
        >
          <option data-testid="genre-option" value="">Todos</option>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectGender;

SelectGender.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
