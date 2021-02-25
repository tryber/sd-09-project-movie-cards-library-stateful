import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      text,
      type,
      value,
      onChange,
    } = this.props;

    return (
      <label
        data-testid={ `${name}-input-label` }
        htmlFor={ name }
      >
        { text }
        <input
          data-testid={ `${name}-input` }
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
