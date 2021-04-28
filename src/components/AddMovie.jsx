import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  // componente de class
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.createStorylineInput = this.createStorylineInput.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }; // define estado inicial
  }

  onClick({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addNewMovie() {
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
  } // funcionalidade do input que recebe o titulo

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
  } // funcionalidade do input que recebe o subtitulo

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
  } // funcionalidade do input que recebe o caminho da imagem

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
  } // funcionalidade do input que recebe a sinopse

  createRatingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          min="0"
          max="5"
          name="rating"
          value={ rating }
          onChange={ this.onClick }
          data-testid="rating-input"
        />
      </label>
    );
  } // funcionalidade do input que recebe a avaliacao

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
  } // funcionalidade do select que define o genero

  createAddMovieButton() {
    return (
      <button
        type="button"
        onClick={ this.addNewMovie }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  } // funcionalidade do botao de criar novo filme

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
      </form> // renderiza form
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
// validacao de callback prop

export default AddMovie;
