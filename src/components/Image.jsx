import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { imagePath, callback } = this.props;
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="inputImage"
        >
          Imagem
          <input
            name="imagePath"
            type="text"
            id="inputImage"
            data-testid="image-input"
            value={ imagePath }
            onChange={ callback }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
