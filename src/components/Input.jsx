import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { input } = this.props;
    const {
      dataTestIdLabel,
      labelTitle,
      id,
      name,
      type,
      value,
      onChange,
    } = input;
    return (
      <label data-testid={ dataTestIdLabel } htmlFor={ id }>
        { labelTitle }
        <input
          id={ id }
          name={ name }
          type={ type }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        />
      </label>
    );
  }
}

export default Input;

Input.propTypes = {
  dataTestIdLabel: PropTypes.string,
  labelTitle: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  dataTestid: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
