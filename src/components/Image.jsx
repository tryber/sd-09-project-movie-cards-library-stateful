import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-path">
        Imagem
        <input
          type="text"
          name="image-path"
          value={ imagePath }
          alt="image"
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Image;
