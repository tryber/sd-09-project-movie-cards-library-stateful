import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreSelect extends Component {
  render() {
    const {
      value,
      onChange,
    } = this.props;
    const options = [
      {
        optionValue: 'action',
        optionLabel: 'Ação',
      },
      {
        optionValue: 'comedy',
        optionLabel: 'Comédia',
      },
      {
        optionValue: 'thriller',
        optionLabel: 'Suspense',
      },
    ];

    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ onChange }
          id="genre"
        >
          {options.map(({ optionValue, optionLabel }, key) => (
            <option value={ optionValue } data-testid="genre-option" key={ key }>
              { optionLabel }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

GenreSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreSelect;
