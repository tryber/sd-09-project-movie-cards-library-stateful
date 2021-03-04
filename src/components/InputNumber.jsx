import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { label, name, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid={ `${name}-input-label` }>
          { label }
          <input
            type="number"
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

InputNumber.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputNumber;
