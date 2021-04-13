import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clearAllStates = this.clearAllStates.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  createInputTitle(title) {
    return (
      <label
        htmlFor="InpuTitle"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          name="title"
          id="InpuTitle"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  createInputSubtitle(subtitle) {
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="SubtitleInput"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="SubtitleInput"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  createInputImagepath(imagePath) {
    return (
      <label
        data-testid="image-input-label"
        htmlFor="imageInput"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imageInput"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  createTextareaStoryline(storyline) {
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storylineInput"
      >
        Sinopse
        <textarea
          name="storyline"
          id="storylineInput"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  createInputRating(rating) {
    return (
      <label
        data-testid="rating-input-label"
        htmlFor="ratingInput"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          id="ratingInput"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }

  createSelectGenre(genre) {
    return (
      <label
        data-testid="genre-input-label"
        htmlFor="genreInput"
      >
        Gênero
        <select
          name="genre"
          id="genreInput"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  clearAllStates() {
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

  render() {
    const { subtitle, title, storyline, imagePath, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.createInputTitle(title)}
          {this.createInputSubtitle(subtitle)}
          {this.createInputImagepath(imagePath)}
          {this.createTextareaStoryline(storyline)}
          {this.createInputRating(rating)}
          {this.createSelectGenre(genre)}
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.clearAllStates }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
