import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderSubtitle = this.renderSubtitle.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.renderStoryLine = this.renderStoryLine.bind(this);
    this.renderRating = this.renderRating.bind(this);
    this.renderGenre = this.renderGenre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderButton = this.renderButton.bind(this);
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
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    const { onClick } = this.props;
    const stateCopy = this.state;
    onClick(stateCopy);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="add-title">
        Título
        <input
          id="add-title"
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="add-subtitle">
        Subtítulo
        <input
          id="add-subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          name="subtitle"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="add-image">
        Imagem
        <input
          id="add-image"
          type="text"
          data-testid="image-input"
          value={ imagePath }
          name="imagePath"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderStoryLine() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="add-storyline">
        Sinopse
        <textarea
          id="add-storyline"
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="add-rating">
        Avaliação
        <input
          id="add-rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          name="rating"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="add-genre">
        Gênero
        <select
          id="add-genre"
          data-testid="genre-input"
          name="genre"
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

  renderButton() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.handleSubmit }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImage() }
        { this.renderStoryLine() }
        { this.renderRating() }
        { this.renderGenre() }
        { this.renderButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
