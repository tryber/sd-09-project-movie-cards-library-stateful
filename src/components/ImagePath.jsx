import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const {
      imagePath,
      onChange,
    } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          id="image-input"
          value={ imagePath }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagePath: PropTypes.string,
  onChange: PropTypes.func,
};

ImagePath.defaultProps = {
  imagePath: '',
  onChange: undefined,
};

export default ImagePath;
