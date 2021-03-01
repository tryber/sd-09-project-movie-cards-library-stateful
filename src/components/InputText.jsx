import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  constructor() {
    super();
    this.validatesField = this.validatesField.bind(this);
  }

  validatesField(val, testId) {
    let field = { type: 'text' };
    if (testId === 'title-input') {
      field = {
        ...field,
        name: 'title',
        id: 'title-input',
        value: val,
        labelTesId: 'title-input-label',
        inputLabel: 'Título',
      };
    } else if (testId === 'subtitle-input') {
      field = {
        ...field,
        name: 'subtitle',
        id: 'subtitle-input',
        value: val,
        labelTesId: 'subtitle-input-label',
        inputLabel: 'Subtítulo',
      };
    } else if (testId === 'image-input') {
      field = {
        ...field,
        name: 'imagePath',
        id: 'image-input',
        value: val,
        labelTesId: 'image-input-label',
        inputLabel: 'Imagem',
      };
    } else if (testId === 'rating-input') {
      field = {
        type: 'number',
        name: 'rating',
        id: 'rating-input',
        value: val,
        labelTesId: 'rating-input-label',
        inputLabel: 'Avaliação',
      };
    }
    return field;
  }

  render() {
    const { testId, val, evtFunc } = this.props;
    const {
      type,
      name,
      id,
      value,
      labelTesId,
      inputLabel,
    } = this.validatesField(val, testId);
    return (
      <label htmlFor={ id } data-testid={ labelTesId }>
        { inputLabel }
        <input
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          data-testid={ testId }
          onChange={ evtFunc }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  testId: PropTypes.string.isRequired,
  val: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  evtFunc: PropTypes.func.isRequired,
};

export default InputText;
