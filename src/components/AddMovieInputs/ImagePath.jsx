import React from 'react';
import PropTypes from 'prop-types';

export default function ImagePath({ imagePath, onChange }) {
  return (
    <label htmlFor="image-input" data-testid="image-input-label">
      Imagem
      <input
        value={ imagePath }
        onChange={ (ev) => onChange(ev.target.value) }
        id="image-input"
        type="text"
        data-testid="image-input"
      />
    </label>
  );
}

ImagePath.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
