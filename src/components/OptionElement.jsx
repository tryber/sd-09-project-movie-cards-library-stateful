import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Option extends Component {
  render() {
    const { option } = this.props;
    const { optionValue, optionText, dataTestId } = option;
    return (
      <option value={ optionValue } data-testid={ dataTestId }>
        { optionText }
      </option>
    );
  }
}

export default Option;

Option.propTypes = {
  optionValue: PropTypes.string,
  optionText: PropTypes.string,
  dataTestId: PropTypes.string,
}.isRequired;
