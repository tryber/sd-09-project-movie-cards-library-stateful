import React from 'react';
import { string, func } from 'prop-types';

class ImageMovie extends React.Component {
  render() {
    const {
      value,
      handleChange,
    } = this.props;

    return (
      <label htmlFor="imageMovie" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

ImageMovie.propTypes = {
  value: string,
  handleChange: func,
};

ImageMovie.defaultProps = {
  value: '',
  handleChange: () => {},
};

export default ImageMovie;
