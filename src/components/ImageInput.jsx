import React from 'react';
import PropTypes from 'prop-types';

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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default ImageInput;
