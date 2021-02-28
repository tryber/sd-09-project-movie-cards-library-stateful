import React, { Component } from 'react';
import PropType from 'prop-types';

class Image extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

Image.propTypes = {
  imagePath: PropType.string,
  handleChange: PropType.func,
}.isRequired;

export default Image;
