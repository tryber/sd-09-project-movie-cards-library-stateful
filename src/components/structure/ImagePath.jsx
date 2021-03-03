import React from 'react';
import PropTypes from 'prop-types';

const ImagePath = ({ value, onChange }) => (
  <label data-testid="image-input-label" htmlFor="image-input">
    Imagem
    <input
      name="imagePath"
      value={ value }
      data-testid="image-input"
      onChange={ onChange }
    />
  </label>
);

ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImagePath;
