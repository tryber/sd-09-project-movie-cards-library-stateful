import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="img-input-label">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          htmlFor="img-input-label"
          value={ value }
          type="text"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default ImageInput;

ImageInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
