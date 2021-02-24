import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
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

  renderTitleInput() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="titleInput">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          id="titleInput"
        />
      </label>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          id="subtitleInput"
        />
      </label>
    );
  }

  renderImageInput() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imageInput">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          id="imageInput"
        />
      </label>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storylineInput">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          id="storylineInput"
        />
      </label>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingInput">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
          id="ratingInput"
        />
      </label>
    );
  }

  renderGenreInput() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genreInput">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          id="genreInput"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImageInput()}
        {this.renderStorylineInput()}
        {this.renderRatingInput()}
        {this.renderGenreInput()}
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.resetState }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = ({
  onClick: PropTypes.func,
}).isRequired;

export default AddMovie;
