import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.titleInput = this.titleInput.bind(this);
    this.subtitleInput = this.subtitleInput.bind(this);
    this.imageInput = this.imageInput.bind(this);
    this.textAreaInput = this.textAreaInput.bind(this);
    this.ratingInput = this.ratingInput.bind(this);
    this.genreInput = this.genreInput.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  titleInput(title) {
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

  subtitleInput(subtitle) {
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

  imageInput(imagePath) {
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

  textAreaInput(storyline) {
    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          cols="30"
          rows="10"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingInput(rating) {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreInput(genre) {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
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

  addNewMovie(event) {
    event.preventDefault();
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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titleInput(title)}
        {this.subtitleInput(subtitle)}
        {this.imageInput(imagePath)}
        {this.textAreaInput(storyline)}
        {this.ratingInput(rating)}
        {this.genreInput(genre)}
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addNewMovie }
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
