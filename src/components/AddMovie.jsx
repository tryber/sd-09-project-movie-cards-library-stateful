// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
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
    this.handleRating = this.handleRating.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleRating({ target }) {
    const { value } = target;
    this.setState({
      rating: Number(value),
    });
  }

  initialState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  titleInput() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          value={ title }
          type="text"
          name="title"
          id="title"
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  subtitleInput() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          value={ subtitle }
          type="text"
          name="subtitle"
          id="subtitle"
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  imageInput() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          value={ imagePath }
          type="text"
          name="imagePath"
          id="image"
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  storylineInput() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          id="storyline"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  ratingInput() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={ rating }
          onChange={ this.handleRating }
          data-testid="rating-input"
        />
      </label>
    );
  }

  selectInput() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          value={ genre }
          data-testid="genre-input"
          name="genre"
          id="genre"
          onChange={ this.handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  submitButton() {
    const { onClick } = this.props;
    return (
      <button
        className="submitButton"
        data-testid="send-button"
        type="submit"
        onClick={ (event) => {
          event.preventDefault();
          onClick(this.state);
          this.initialState();
        } }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <form className="add-movie-form" data-testid="add-movie-form">
          { this.titleInput() }
          { this.subtitleInput() }
          { this.imageInput() }
          { this.storylineInput() }
          { this.ratingInput() }
          { this.selectInput() }
          { this.submitButton() }
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
