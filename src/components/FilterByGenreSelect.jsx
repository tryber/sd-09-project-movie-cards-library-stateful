import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterByGenreSelect extends Component {
  render() {
    const {
      value,
      onChange,
    } = this.props;
    const options = [
      {
        optionValue: '',
        optionLabel: 'Todos',
      },
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
      <label data-testid="select-input-label" htmlFor="filter-genre-select">
        Filtrar por gênero
        <select
          value={ value }
          data-testid="select-input"
          onChange={ onChange }
          id="filter-genre-select"
        >
          {options.map(({ optionValue, optionLabel }, key) => (
            <option value={ optionValue } data-testid="select-option" key={ key }>
              { optionLabel }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FilterByGenreSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterByGenreSelect;
