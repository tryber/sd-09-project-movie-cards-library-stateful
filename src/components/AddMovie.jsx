import React from 'react';
import { func } from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.inputTitle = this.inputTitle.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImg = this.inputImg.bind(this);
    this.inputStoryline = this.inputStoryline.bind(this);
    this.inputRating = this.inputRating.bind(this);
    this.inputGenre = this.inputGenre.bind(this);
    this.buttonMovie = this.buttonMovie.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  clickButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputTitle(callback) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="input-title">
        Título
        <input
          id="input-title"
          name="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ callback }
        />
      </label>
    );
  }

  inputSubtitle(callback) {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="input-subtitle">
        Subtítulo
        <input
          id="input-subtitle"
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ callback }
        />
      </label>
    );
  }

  inputImg(callback) {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="input-img">
        Imagem
        <input
          id="input-img"
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ callback }
        />
      </label>
    );
  }

  inputStoryline(callback) {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="input-storyline">
        Sinopse
        <textarea
          id="input-storyline"
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ callback }
        />
      </label>
    );
  }

  inputRating(callback) {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="input-rating">
        Avaliação
        <input
          id="input-rating"
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ callback }
        />
      </label>
    );
  }

  inputGenre(callback) {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="input-genre">
        Gênero
        <select
          id="input-genre"
          name="genre"
          value={ genre }
          onChange={ callback }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  buttonAddMovie(callback) {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ callback }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle(this.handleChange) }
        { this.inputSubtitle(this.handleChange) }
        { this.inputImg(this.handleChange) }
        { this.inputStoryline(this.handleChange) }
        { this.inputRating(this.handleChange) }
        { this.inputGenre(this.handleChange) }
        { this.buttonAddMovie(this.clickButton) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
