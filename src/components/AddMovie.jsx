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

  resetInputState() {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  createTitleInput(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          value={ title }
          onChange={ this.onClick }
          data-testid="title-input"
        />
      </label>
    );
  }

  createSubtitleInput(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          onChange={ this.onClick }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  creatImageInput(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.onClick }
          data-testid="image-input"
        />
      </label>
    );
  }

  createStorylineInput(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ this.onClick }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  createRatingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <textarea
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.onClick }
          data-testid="rating-input"
        />
      </label>
    );
  }

  createGenreInput(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.onClick }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  createAddMovieButton() {
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
        { this.createAddMovieButton() }
      </form>
    );
  }
}

export default AddMovie;
