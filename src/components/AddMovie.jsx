// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);
    this.createTitle = this.createTitle.bind(this);
    this.createSubtitle = this.createSubtitle.bind(this);
    this.createImagepath = this.createImagepath.bind(this);
    this.createStoryline = this.createStoryline.bind(this);
    this.createRating = this.createRating.bind(this);
    this.createGenre = this.createGenre.bind(this);
    this.createButton = this.createButton.bind(this);

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

  clearState() {
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  createTitle(title) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          name="subtitle"
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createImagepath(imagePath) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          value={ imagePath }
          type="text"
          name="imagePath"
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createGenre(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option name="action" value="action">Ação</option>
          <option name="comedy" value="comedy">Comédia</option>
          <option name="thriller" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  createStoryline(storyline) {
    return (
      <label htmlFor="storyline">
        Sinopse
        <textarea
          type="text"
          value={ storyline }
          name="storyline"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createRating(rating) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          name="rating"
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  createButton() {
    return (
      <input
        data-testid="send-button"
        value="Adicionar filme"
        type="submit"
        onClick={ this.clearState }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form id="add-movie-form" data-testid="add-movie-form">
        {this.createTitle(title)}
        {this.createSubtitle(subtitle)}
        {this.createImagepath(imagePath)}
        {this.createStoryline(storyline)}
        {this.createGenre(genre)}
        { this.createRating(rating)}
        {this.createButton()}
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   genre: PropTypes.string.isRequired,

// };

export default AddMovie;
