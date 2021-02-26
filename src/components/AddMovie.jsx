// implement AddMovie component here
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
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

  InputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.handleChange }
          name="title"
        />
      </label>
    );
  }

  InputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ this.handleChange }
          name="subtitle"
        />
      </label>
    );
  }

  InputImage() {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
          name="imagePath"
        />
      </label>
    );
  }

  InputStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          type="text"
          value={ storyline }
          onChange={ this.handleChange }
          name="storyline"
        />
      </label>
    );
  }

  InputRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          value={ rating }
          onChange={ this.handleChange }
          name="rating"
        />
      </label>
    );
  }

  InputGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleChange }
          name="genre"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  InputButton() {
    const { onClick } = this.props;
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ () => this.handleClick(onClick) }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.InputTitle() }
        { this.InputSubtitle() }
        { this.InputImage() }
        { this.InputStoryline() }
        { this.InputRating() }
        { this.InputGenre() }
        { this.InputButton() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
