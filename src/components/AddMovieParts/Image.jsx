import React from 'react';

class Image extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
      Imagem
      <input
        type="text"
        value={ imagePath }
        data-testid="image-input"
        id="imagePath"
        onChange={ handleChange }
      />
      </label>
    );
  }
}

export default Image;



