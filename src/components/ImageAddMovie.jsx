import React from 'react';
import PropTypes from 'prop-types';

class ImageAddMovie extends React.Component {
  render() {
    const { value, handleFormFieldChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          id="image"
          type="text"
          value={ value }
          onChange={ handleFormFieldChange }
        />
      </label>
    );
  }
}

ImageAddMovie.propTypes = {
  value: PropTypes.string.isRequired,
  handleFormFieldChange: PropTypes.func.isRequired,
};

export default ImageAddMovie;
