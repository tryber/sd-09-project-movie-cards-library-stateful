import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.titleElement = this.titleElement.bind(this);
    this.subtitleElement = this.subtitleElement.bind(this);
    this.imageElement = this.imageElement.bind(this);
    this.storylineElement = this.storylineElement.bind(this);
    this.ratingElement = this.ratingElement.bind(this);
    this.genreElement = this.genreElement.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  updateState({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
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

  titleElement() {
    const { title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.updateState }
        />
      </label>
    );
  }

  subtitleElement() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          type="text"
          id="subtitle-input"
          data-testid="subtitle-input"
          onChange={ this.updateState }
        />
      </label>
    );
  }

  imageElement() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ this.updateState }
        />
      </label>
    );
  }

  storylineElement() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          cols="30"
          rows="10"
          onChange={ this.updateState }
          value={ storyline }
        />
      </label>
    );
  }

  ratingElement() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          data-testid="rating-input"
          onChange={ this.updateState }
          value={ rating }
        />
      </label>
    );
  }

  genreElement() {
    const { genre } = this.state;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.updateState }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        { this.titleElement() }
        { this.subtitleElement() }
        { this.imageElement()}
        { this.storylineElement() }
        { this.ratingElement() }
        { this.genreElement() }
        <button data-testid="send-button" type="submit" onClick={ this.resetState }>
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
