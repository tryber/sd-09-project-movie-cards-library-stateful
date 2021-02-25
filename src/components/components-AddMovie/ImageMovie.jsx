import React from 'react';
import PropTypes from 'prop-types';

class ImageMovie extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          id="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageMovie.propTypes = {
  imagePath: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ImageMovie;
