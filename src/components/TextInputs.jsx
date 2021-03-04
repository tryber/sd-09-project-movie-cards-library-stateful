import React from 'react';
import propTypes from 'prop-types';

class TextInputs extends React.Component {
  render() {
    const { title, subtitle, imagePath, storyline, updateState2 } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ updateState2 }
            name="title"
            itemID="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ updateState2 }
            name="subtitle"
            itemID="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ updateState2 }
            name="imagePath"
            itemID="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            onChange={ updateState2 }
            name="storyline"
            itemID="storyline-input"
          />
        </label>
      </form>
    );
  }
}
TextInputs.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  imagePath: propTypes.string,
  storyline: propTypes.string,
  rating: propTypes.number,
  genre: propTypes.string,
}.isRequired;

export default TextInputs;
