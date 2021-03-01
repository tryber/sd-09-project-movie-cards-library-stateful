import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {
  render() {
    const { dataLabel, idLabel, textLabel, dataInput, nameInput, idInput,
      typeInput, valueInput, funcInput } = this.props;
    return (
      <div>
        <label
          data-testid={ dataLabel }
          htmlFor={ idLabel }
        >
          { textLabel }
          <div>
            <input
              data-testid={ dataInput }
              name={ nameInput }
              id={ idInput }
              type={ typeInput }
              value={ valueInput }
              onChange={ funcInput }
            />
          </div>
        </label>
      </div>
    );
  }
}

InputField.propTypes = {
  dataLabel: PropTypes.string.isRequired,
  idLabel: PropTypes.string.isRequired,
  textLabel: PropTypes.string.isRequired,
  dataInput: PropTypes.string.isRequired,
  nameInput: PropTypes.string.isRequired,
  idInput: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
  valueInput: PropTypes.string.isRequired,
  funcInput: PropTypes.func.isRequired,
};

export default InputField;
