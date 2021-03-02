import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createTitleInput = this.createTitleInput.bind(this);
    this.createSubtitleInput = this.createSubtitleInput.bind(this);
    this.createImageInput = this.createImageInput.bind(this);
    this.createStorylineInput = this.createStorylineInput.bind(this);
    this.createRatingInput = this.createRatingInput.bind(this);
    this.createGenreInput = this.createGenreInput.bind(this);
    this.createButton = this.createButton.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createTitleInput(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
          name="title"
        />
      </label>
    );
  }

  createSubtitleInput(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          name="subtitle"
        />
      </label>
    );
  }

  createImageInput(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          name="imagePath"
        />
      </label>
    );
  }

  createStorylineInput(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          value={ storyline }
          onChange={ this.handleChange }
          name="storyline"
        />
      </label>
    );
  }

  createRatingInput(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          name="rating"
        />
      </label>
    );
  }

  createGenreInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  createButton() {
    return (
      <button
        type="button"
        onClick={ this.resetState }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
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
        { this.createButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
