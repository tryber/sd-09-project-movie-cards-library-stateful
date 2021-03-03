import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { select, children } = this.props;
    const {
      dataTestIdLabel,
      labelTitle,
      id,
      name,
      value,
      onChange,
    } = select;
    return (
      <label data-testid={ dataTestIdLabel } htmlFor={ id }>
        { labelTitle }
        <select
          id={ id }
          name={ name }
          value={ value }
          data-testid={ id }
          onChange={ onChange }
        >
          { children }
        </select>
      </label>
    );
  }
}

export default Select;

Select.propTypes = {
  dataTestIdLabel: PropTypes.string,
  labelTitle: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;
