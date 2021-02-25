import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <div>
        <p>AddMovie</p>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              title="title-input"
              type="text"
            />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle-input"
              data-testid="subtitle-input"
              type="text"
            />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              id="image-input"
              data-testid="image-input"
              type="text"
            />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline-input"
              data-testid="storyline-input"
            />
          </label>
          <label htmlFor="rating-input" data-testid="rating-input-label">
            Avaliação
            <input
              data-testid="rating-input"
              type="number"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
