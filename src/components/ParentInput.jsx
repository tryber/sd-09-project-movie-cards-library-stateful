import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ParentInput extends Component {
  render() {
    const { type, name, value, lblTitle, handleChange } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}Input` }>
        { lblTitle }
        <input
          type={ type }
          data-testid={ `${name}-input` }
          name={ name }
          id={ `${name}Input` }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}
ParentInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  lblTitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default ParentInput;
