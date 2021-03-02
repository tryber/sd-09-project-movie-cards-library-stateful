import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addMovieClick = this.addMovieClick.bind(this);
    this.addFormItemTitle = this.addFormItemTitle.bind(this);
    this.addFormItemSubtitle = this.addFormItemSubtitle.bind(this);
    this.addFormItemStoryline = this.addFormItemStoryline.bind(this);
    this.addFormItemImage = this.addFormItemImage.bind(this);
    this.addFormItemGenre = this.addFormItemGenre.bind(this);
    this.addFormItemRating = this.addFormItemRating.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  addMovieClick() {
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

  addFormItemTitle() {
    const { title } = this.state;
    const { handleChange } = this;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }

  addFormItemSubtitle() {
    const { subtitle } = this.state;
    const { handleChange } = this;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }

  addFormItemImage() {
    const { imagePath } = this.state;
    const { handleChange } = this;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }

  addFormItemStoryline() {
    const { storyline } = this.state;
    const { handleChange } = this;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }

  addFormItemRating() {
    const { rating } = this.state;
    const { handleChange } = this;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }

  addFormItemGenre() {
    const { genre } = this.state;
    const { handleChange } = this;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          type="text"
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.addFormItemTitle()}
        {this.addFormItemSubtitle()}
        {this.addFormItemImage()}
        {this.addFormItemStoryline()}
        {this.addFormItemRating()}
        {this.addFormItemGenre()}
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addMovieClick }
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
