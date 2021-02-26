import React, { Component } from 'react';
import { string, shape, func } from 'prop-types';

export default class Select extends Component {
  render() {
    const { label, name, id, options, value, onInputChange } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { label }
        <select
          name={ name }
          id={ id }
          data-testid={ id }
          value={ value }
          onChange={ onInputChange }
        >
          {
            Object.keys(options).map((option) => (
              <option key={ option } value={ option } data-testid="genre-option">
                { options[option] }
              </option>
            ))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: string,
  name: string,
  id: string,
  options: shape(),
  value: string,
  onInputChange: func,
};

Select.defaultProps = {
  label: 'Label for input',
  name: 'name-same-as-state',
  id: 'input-id',
  options: [],
  value: 'value-for-controlled-input',
  onInputChange: () => 'callback for controlled input',
};
