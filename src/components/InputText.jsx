import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { inputTestId, stateValue, onChangeFunc, labelTesId, inputLabel } = this.props;
    let input = {};
    if (inputTestId === 'title-input') {
      input = { name: 'title', id: 'title-input', value: stateValue };
    } else if (inputTestId === 'subtitle-input') {
      input = { name: 'subtitle', id: 'subtitle-input', value: stateValue };
    } else if (inputTestId === 'image-input') {
      input = { name: 'imagePath', id: 'image-input', value: stateValue };
    }
    const { name, id, value } = input;
    return (
      <label htmlFor={ id } data-testid={ labelTesId }>
        { inputLabel }
        <input
          type="text"
          name={ name }
          id={ id }
          value={ value }
          data-testid={ inputTestId }
          onChange={ onChangeFunc }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  inputTestId: PropTypes.string.isRequired,
  stateValue: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  labelTesId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
};

export default InputText;
