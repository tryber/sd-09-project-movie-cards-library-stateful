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
  }

  handleChange({ target }) {
    const { value, name } = target;
    console.log(value);
    if (name === 'button') {
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
    this.setState({
      [name]: value,
    });
  }

  renderTitle() {
    const { title } = this.state;
    const { handleChange } = this;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitle() {
    const { subtitle } = this.state;
    const { handleChange } = this;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImagePath() {
    const { imagePath } = this.state;
    const { handleChange } = this;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStoryLine() {
    const { storyline } = this.state;
    const { handleChange } = this;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRating() {
    const { rating } = this.state;
    const { handleChange } = this;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }

  renderGenre() {
    const { genre } = this.state;
    const { handleChange } = this;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { handleChange } = this;
    return (
      <form data-testid="add-movie-form">

        { this.renderTitle() }
        { this.renderSubtitle() }
        { this.renderImagePath() }
        { this.renderStoryLine() }
        { this.renderRating() }
        { this.renderGenre() }

        <button
          name="button"
          type="button"
          data-testid="send-button"
          onClick={ handleChange }
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
