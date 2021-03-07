import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, name, value, onChange, test, testLabel } = this.props;
    return (
      <div>
        <label htmlFor={ name } data-testid={ testLabel }>
          { label }
          <input
            type="text"
            id={ name }
            name={ name }
            value={ value }
            onChange={ onChange }
            data-testid={ test }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  testLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
