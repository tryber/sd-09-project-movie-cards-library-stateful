// implement AddMovie component here
import React from 'react';

const movieState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = movieState;
    this.handleChange = this.handleChange.bind(this);
    this.setNewTitle = this.setNewTitle.bind(this);
    this.setNewSubtitle = this.setNewSubtitle.bind(this);
    this.setNewGenre = this.setNewGenre.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  resetButton() {
    const initialState = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => movieState = initialState }
      >
        Adicionar filme
      </button>
    );
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  setNewTitle(title) {
    return (
      <label
        data-testid="title-input-label"
        htmlFor="title-input"
      >
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          onChange={ this.handleChange }
          value={ title }
        />
      </label>
    );
  }

  setNewSubtitle(subtitle) {
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle-input"
      >
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          value={ subtitle }
        />
      </label>
    );
  }

  setNewImagePath(imagePath) {
    return (
      <label
        data-testid="image-input-label"
        htmlFor="image-input"
      >
        Imagem
        <input
          name="image"
          type="text"
          data-testid="image-input"
          onChange={ this.handleChange }
          value={ imagePath }
        />
      </label>
    );
  }

  setNewStoryline(storyline) {
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline-input"
      >
        Sinopse
        <input
          name="storyline"
          type="text"
          data-testid="storyline-input"
          onChange={ this.handleChange }
          value={ storyline }
        />
      </label>
    );
  }

  setNewRating(rating) {
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="rating-input"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          onChange={ this.handleChange }
          value={ rating }
        />
      </label>
    );
  }

  setNewGenre(genre) {
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genre-input"
      >
        Gênero
        <select
          name="genre"
          type="select"
          data-testid="genre-input"
          onChange={ this.handleChange }
          value={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.setNewTitle(title) }
        { this.setNewSubtitle(subtitle) }
        { this.setNewImagePath(imagePath) }
        { this.setNewStoryline(storyline) }
        { this.setNewRating(rating) }
        { this.setNewGenre(genre) }
        { this.resetButton }
      </form>
    );
  }
}

export default AddMovie;
