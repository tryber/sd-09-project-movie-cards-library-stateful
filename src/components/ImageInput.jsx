import React from 'react';
import propTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-input-label" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
          name="imagePath"
        />
      </label>
    );
  }
}
ImageInput.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default ImageInput;
