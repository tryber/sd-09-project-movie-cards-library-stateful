import React from 'react';
import propTypes from 'prop-types';

class Imagepath extends React.Component {
  render() {
    const { imagePath, randomChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          itemID="image-input"
          onChange={ randomChange }
        />
      </label>
    );
  }
}
Imagepath.propTypes = {
  imagePath: propTypes.string.isRequired,
  randomChange: propTypes.func.isRequired,
};
export default Imagepath;
