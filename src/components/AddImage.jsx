import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddImage extends Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <div>
        <label
          data-testid="image-input-label"
          htmlFor="id-image"
        >
          Imagem
          <div>
            <input
              data-testid="image-input"
              name="imagePath"
              id="id-image"
              type="text"
              value={ imagePath }
              onChange={ handleChange }
            />
          </div>
        </label>
      </div>
    );
  }
}

AddImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddImage;
