import React from 'react';

class ImageInput extends React.Component {
  render() {
    return (
      <div>
        <label
          data-testid="image-input-label"
          subtitle={ subtitle }
          htmlFor="input-subtitle"
          value={ imagePath }
        >
          Imagem
          <input
            data-testid="image-input"
            onChange={ this.handleOnChange }
            id="input-subtitle"
            name="imagePath"
          />
        </label>
        <label htmlFor="input-storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            onChange={ this.handleOnChange }
            id="input-storyline"
            value={ storyline }
            data-testid="storyline-input"
          />
        </label>
      </div>
    );
  }
}

export default ImageInput;
