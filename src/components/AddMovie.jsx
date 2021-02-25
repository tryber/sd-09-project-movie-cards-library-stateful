import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleSubtitleInput = this.handleSubtitleInput.bind(this);
    this.handleImagePathInput = this.handleImagePathInput.bind(this);
    this.handleStorylineInput = this.handleStorylineInput.bind(this);
    this.handleRatingInput = this.handleRatingInput.bind(this);
    this.handleGenreInput = this.handleGenreInput.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTitleInput(event) {
    this.setState({ title: event.target.value });
  }

  handleSubtitleInput(event) {
    this.setState({ subtitle: event.target.value });
  }

  handleImagePathInput(event) {
    this.setState({ imagePath: event.target.value });
  }

  handleStorylineInput(event) {
    this.setState({ storyline: event.target.value });
  }

  handleRatingInput(event) {
    this.setState({ rating: event.target.value });
  }

  handleGenreInput(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title-input"
            value={ title }
            onChange={ this.handleTitleInput }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle-input"
            value={ subtitle }
            onChange={ this.handleSubtitleInput }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image-input"
            value={ imagePath }
            onChange={ this.handleImagePathInput }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyline-input"
            value={ storyline }
            onChange={ this.handleStorylineInput }
            data-testid="storyline-input"
          />
        </label>
        <label htmlFor="rating-input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            id="rating-input"
            value={ rating }
            onChange={ this.handleRatingInput }
            data-testid="rating-input"
          />
        </label>
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Filtrar por gênero
          <select
            id="genre-input"
            value={ genre }
            onChange={ this.handleGenreInput }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
