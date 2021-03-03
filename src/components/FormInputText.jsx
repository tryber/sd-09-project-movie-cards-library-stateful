import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInputText extends Component {
  render() {
    const {
      labelText,
      name,
      value,
      onChange,
    } = this.props;

    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ name }>
        { labelText }
        <input
          name={ name }
          type="text"
          value={ value }
          data-testid={ `${name}-input` }
          onChange={ onChange }
          id={ name }
        />
      </label>
    );
  }
}

FormInputText.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInputText;
