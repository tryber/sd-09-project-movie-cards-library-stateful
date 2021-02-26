// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addMovieFirstState as firstState } from '../extraData';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = firstState;
    this.changeValues = this.changeValues.bind(this);
    this.resetValues = this.resetValues.bind(this);
    this.title = this.title.bind(this);
    this.subtitle = this.subtitle.bind(this);
    this.imagePath = this.imagePath.bind(this);
    this.storyline = this.storyline.bind(this);
    this.rating = this.rating.bind(this);
    this.genre = this.genre.bind(this);
  }

  changeValues(event) {
    const { name, value } = event.target;
    return this.setState({ [name]: value });
  }

  resetValues(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(firstState);
  }

  title(title) {
    return (
      <label data-testid="title-input-label" htmlFor="addMovieTitle">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ this.changeValues }
        />
      </label>
    );
  }

  subtitle(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="addMovieSubTitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.changeValues }
        />
      </label>
    );
  }

  imagePath(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.changeValues }
        />
      </label>
    );
  }

  storyline(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          cols="30"
          rows="1"
          value={ storyline }
          onChange={ this.changeValues }
        />
      </label>
    );
  }

  rating(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.changeValues }
        />
      </label>
    );
  }

  genre(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.changeValues }
        >
          <option
            data-testid="genre-option"
            name="action"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            name="comedy"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            name="thriller"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.title(title) }
        { this.subtitle(subtitle) }
        { this.imagePath(imagePath) }
        { this.storyline(storyline) }
        { this.rating(rating) }
        { this.genre(genre) }
        <div>
          <button type="button" data-testid="send-button" onClick={ this.resetValues }>
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
