import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      name,
      text,
      id,
      type,
      value,
      onChange,
    } = this.props;

    return (
      <label
        data-testid={ `${name}-input-label` }
        htmlFor={ id }
      >
        { text }
        <input
          data-testid={ `${name}-input` }
          name={ name }
          id={ id }
          type={ type }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
