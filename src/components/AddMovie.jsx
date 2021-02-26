// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.titleInput = this.titleInput(this);
    this.subtitleInput = this.subtitleInput(this);
    this.imageInput = this.imageInput(this);
    this.textareaInput = this.textareaInput(this);
    this.ratingInput = this.ratingInput(this);
    this.genreInput = this.genreInput(this);
    this.resetState = this.resetState(this);
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
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  titleInput(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input-id">
        Título
        <input
          id="title-input-id"
          name="title"
          value={ title }
          type="text"
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  subtitleInput(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input-id">
        Título
        <input
          id="subtitle-input-id"
          name="subtitle"
          value={ subtitle }
          type="text"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  imageInput(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input-id">
        Título
        <input
          id="image-input-id"
          name="imagePath"
          value={ imagePath }
          type="text"
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  textareaInput(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input-id">
        Sinopse
        <textarea
          id="storyline-input-id"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  ratingInput(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input-id">
        Título
        <input
          id="rating-input-id"
          name="rating"
          value={ rating }
          type="number"
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  genreInput(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input-id">
        Gênero
        <select
          id="genre-input-id"
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titleInput(title)}
        {this.subtitleInput(subtitle)}
        {this.imageInput(imagePath)}
        {this.textareaInput(storyline)}
        {this.ratingInput(rating)}
        {this.genreInput(genre)}
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
