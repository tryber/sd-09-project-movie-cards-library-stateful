import React from 'react';
import PropTypes from 'prop-types';

class ImagePath extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          id="image"
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;
