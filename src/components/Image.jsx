import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { image, callback } = this.props;
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="inputImage"
        >
          Imagem
          <input
            name="image"
            type="text"
            id="inputImage"
            data-testid="image-input"
            value={ image }
            onChange={ callback }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
