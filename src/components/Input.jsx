import React, { Component } from 'react';
import { string, func, number, oneOfType } from 'prop-types';

export default class Input extends Component {
  render() {
    const { label, name, id, type, value, onInputChange } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { label }
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ id }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: string,
  name: string,
  id: string,
  type: string,
  value: oneOfType([string, number]),
  onInputChange: func,
};

Input.defaultProps = {
  label: 'Label for input',
  name: 'name-same-as-state',
  id: 'input-id',
  type: 'input-type',
  value: 'value-for-controlled-input',
  onInputChange: () => 'callback for controlled input',
};
