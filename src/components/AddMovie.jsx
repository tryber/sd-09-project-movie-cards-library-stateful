// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialStateMovie = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialStateMovie;
    this.createTitleInput = this.createTitleInput.bind(this);
    this.createSubtitleInput = this.createSubtitleInput.bind(this);
    this.createImageInput = this.createImageInput.bind(this);
    this.createStorylineInput = this.createStorylineInput.bind(this);
    this.createRatingInput = this.createRatingInput.bind(this);
    this.createGenreInput = this.createGenreInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  createTitleInput(title) {
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createSubtitleInput(subtitle) {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createImageInput(imagePath) {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createStorylineInput(storyline) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createRatingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
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
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialStateMovie);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.createTitleInput(title) }
        { this.createSubtitleInput(subtitle) }
        { this.createImageInput(imagePath) }
        { this.createStorylineInput(storyline) }
        { this.createRatingInput(rating) }
        { this.createGenreInput(genre) }
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.resetState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
