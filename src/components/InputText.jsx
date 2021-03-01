import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const { inputTestId, stateValue, onChangeFunc, labelTesId, inputLabel } = this.props;
    let input = { type: 'text' };
    if (inputTestId === 'title-input') {
      input = { ...input, name: 'title', id: 'title-input', value: stateValue };
    } else if (inputTestId === 'subtitle-input') {
      input = { ...input, name: 'subtitle', id: 'subtitle-input', value: stateValue };
    } else if (inputTestId === 'image-input') {
      input = { ...input, name: 'imagePath', id: 'image-input', value: stateValue };
    } else if (inputTestId === 'rating-input') {
      input = { type: 'number', name: 'rating', id: 'rating-input', value: stateValue };
    }
    const { type, name, id, value } = input;
    return (
      <label htmlFor={ id } data-testid={ labelTesId }>
        { inputLabel }
        <input
          type={ type }
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
  stateValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChangeFunc: PropTypes.func.isRequired,
  labelTesId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
};

export default InputText;
