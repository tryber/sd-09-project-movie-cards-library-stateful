import React from 'react';
import Proptypes from 'prop-types';

class ImagePathAdd extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePathAdd.propTypes = {
  imagePath: Proptypes.string.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default ImagePathAdd;
