import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  createTitleInput(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.onClick }
          id="title-input"
        />
        Título
      </label>
    );
  }

  createSubtitleInput(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.onClick }
          id="subtitle-input"
        />
        Subtítulo
      </label>
    );
  }

  createImageInput(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.onClick }
          id="image-input"
        />
        Imagem
      </label>
    );
  }

  createStorylineInput(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        <textarea
          data-testid="storyline-input"
          type="text"
          value={ storyline }
          onChange={ this.onClick }
          id="storyline-input"
        />
        Sinopse
      </label>
    );
  }

  createRatingInput(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ this.onClick }
          id="rating-input"
        />
        Avaliação
      </label>
    );
  }

  createGenreInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.onClick }
          id="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        Gênero
      </label>
    );
  }

  createButton() {
    return (
      <button
        type="button"
        onClick={ this.resetInputState }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createTitleInput(title) }
        { this.createSubtitleInput(subtitle) }
        { this.creatImageInput(imagePath) }
        { this.createStorylineInput(storyline) }
        { this.createRatingInput(rating) }
        { this.createGenreInput(genre) }
        { this.createButton() }
      </form>
    );
  }
}

export default AddMovie;
