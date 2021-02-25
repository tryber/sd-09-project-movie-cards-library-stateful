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
  }

  createTitleInput() {
    const { handleChange } = this.props;
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }

  createSubtitleInput() {
    const { handleChange } = this.props;
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }

  createImageInput() {
    const { handleChange } = this.props;
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          data-testid="subtitle-input"
          value={ imagePath }
          onChange={ handleChange }
        />
      </label>
    );
  }

  createStorylineInput() {
    const { handleChange } = this.props;
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }

  createRatingInput() {
    const { handleChange } = this.props;
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }

  createGenreInput() {
    const { handleChange } = this.props;
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
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
    this.setState({ initialStateMovie });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.createTitleInput() }
        { this.createSubtitleInput() }
        { this.createImageInput() }
        { this.createStorylineInput() }
        { this.createRatingInput() }
        { this.createGenreInput() }
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
  handleChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
