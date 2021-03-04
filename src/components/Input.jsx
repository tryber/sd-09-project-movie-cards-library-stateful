import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid={ `${name}-input-label` }>
          { label }
          <input
            type={ type }
            id={ name }
            name={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ `${name}-input` }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
