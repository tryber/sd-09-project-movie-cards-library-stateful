import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageField extends Component {
  render() {
    const { handleChange, imagePath } = this.props;
    return (
      <label htmlFor="input-image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          onChange={ handleChange }
          value={ imagePath }
          name="imagePath"
        />
      </label>
    );
  }
}

ImageField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  imagePath: PropTypes.string.isRequired,
};
