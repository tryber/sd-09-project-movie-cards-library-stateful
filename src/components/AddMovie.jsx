import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.createTitle = this.createTitle.bind(this);
    this.createSubtitle = this.createSubtitle.bind(this);
    this.createImage = this.createImage.bind(this);
    this.createStoryline = this.createStoryline.bind(this);
    this.createRating = this.createRating.bind(this);
    this.createGenre = this.createGenre.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      title: event.target.value,
      subtitle: event.target.value,
      imagePath: event.target.value,
      storyline: event.target.value,
      rating: event.target.value,
      genre: event.target.value,
    });
  }

  clearState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createTitle(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          value={ title }
          id="title"
          onChange={ this.handleChange }
          type="text"
        />
      </label>
    );
  }

  createSubtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          value={ subtitle }
          id="subtitle"
          onChange={ this.handleChange }
          type="text"
        />
      </label>
    );
  }

  createImage(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          value={ imagePath }
          id="imagePath"
          onChange={ this.handleChange }
          type="text"
        />
      </label>
    );
  }

  createStoryline(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          id="storyline"
          onChange={ this.handleChange }
          type="text"
        />
      </label>
    );
  }

  createRating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          value={ rating }
          id="rating"
          onChange={ this.handleChange }
          type="number"
        />
      </label>
    );
  }

  createGenre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          id="genre"
          onChange={ this.handleChange }
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
        { this.createTitle(title) }
        { this.createSubtitle(subtitle) }
        { this.createImage(imagePath) }
        { this.createStoryline(storyline) }
        { this.createRating(rating) }
        { this.createGenre(genre) }
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
