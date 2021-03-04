// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChangeMovie = this.handleChangeMovie.bind(this);
    this.handleClickMovie = this.handleClickMovie.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeSubtitle = this.changeSubtitle.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeStoryLine = this.changeStoryLine.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeGenre = this.changeGenre.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChangeMovie({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClickMovie() {}

  changeTitle(title) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          name="title"
          value={ title }
          onChange={ this.handleChangeMovie }
          type="text"
          data-testid="title-input"
        />
      </label>
    );
  }

  changeSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChangeMovie }
          type="text"
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  changeImage(imagePath) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChangeMovie }
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }

  changeStoryLine(storyline) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChangeMovie }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  changeRating(rating) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          name="rating"
          value={ rating }
          onChange={ this.handleChangeMovie }
          type="number"
          data-testid="rating-input"
        />
      </label>
    );
  }

  changeGenre(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          name="genre"
          value={ genre }
          onChange={ this.handleChangeMovie }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.changeTitle(title) }
        { this.changeSubtitle(subtitle) }
        { this.changeImage(imagePath) }
        { this.changeStoryLine(storyline) }
        { this.changeRating(rating) }
        { this.changeGenre(genre) }
        <button
          type="reset"
          onClick={ this.handleClickMovie }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
