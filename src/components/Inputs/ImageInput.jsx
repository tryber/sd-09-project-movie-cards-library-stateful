import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { handleOnChange, value } = this.props;
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="path"
        >
          Imagem
          <input
            data-testid="image-input"
            onChange={ handleOnChange }
            id="path"
            name="imagePath"
            value={ value }
          />
        </label>
      </div>
    );
  }
}

ImageInput.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImageInput;
