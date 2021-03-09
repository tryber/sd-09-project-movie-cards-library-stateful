import React from 'react';
import PropTypes from 'prop-types';

class ImageLabel extends React.Component {
  render() {
    const { imagePath, changeStateValue } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          id="imagePath"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ changeStateValue }
        />
      </label>
    );
  }
}

ImageLabel.propTypes = {
  imagePath: PropTypes.string.isRequired,
  changeStateValue: PropTypes.func.isRequired,
};

export default ImageLabel;
