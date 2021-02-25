import React, { Component } from 'react';

class AddMovie extends Component {
  renderTitle() {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          title="title-input"
          type="text"
        />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle-input"
          data-testid="subtitle-input"
          type="text"
        />
      </label>
    );
  }

  renderImagePath() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          data-testid="image-input"
          type="text"
        />
      </label>
    );
  }

  renderStoryline() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline-input"
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRating() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
        />
      </label>
    );
  }

  renderGenre() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          type="checkbox"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <p>AddMovie</p>
        <form data-testid="add-movie-form">
          { this.renderTitle() }
          { this.renderSubtitle() }
          { this.renderImagePath() }
          { this.renderStoryline() }
          { this.renderRating() }
          { this.renderGenre() }
        </form>
      </div>
    );
  }
}

export default AddMovie;
