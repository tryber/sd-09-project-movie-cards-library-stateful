import React from 'react';
import PropTypes from 'prop-types';

class ImageForms extends React.Component {
  render() {
    const { imagePath, stateChange } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="image-input"
          value={ imagePath }
          data-testid="image-input"
          onChange={ stateChange }
        />
      </label>
    );
  }
}

ImageForms.propTypes = {
  imagePath: PropTypes.string.isRequired,
  stateChange: PropTypes.func.isRequired,
};

export default ImageForms;
