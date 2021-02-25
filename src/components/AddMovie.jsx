import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(
      { subtitle: '',
        title: '',
        imagePath: '',
        storyLine: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  title(titulo, change) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="title"
          value={ titulo }
          data-testid="title-input"
          onChange={ change }
        />
      </label>
    );
  }

  subtitle(subtitle, handlechange) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handlechange }
        />
      </label>
    );
  }

  imagepath(imagePath, handlechange) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handlechange }
        />
      </label>
    );
  }

  storyline(storyline, handlechange) {
    return (
      <label htmlFor="storyLine" data-testid="storyline-input-label">
        Sinopse
        <textarea
          type="text"
          name="storyLine"
          id="storyLine"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ handlechange }
        />

      </label>
    );
  }

  rating(rate, handlechange) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          value={ rate }
          data-testid="rating-input"
          onChange={ handlechange }
        />
      </label>
    );
  }

  genre(genre, handlechange) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handlechange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          {this.title(title, this.handleChange)}
          {this.subtitle(subtitle, this.handleChange)}
          {this.imagepath(imagePath, this.handleChange)}
          {this.storyline(storyLine, this.handleChange)}
          {this.rating(rating, this.handleChange)}
          {this.genre(genre, this.handleChange)}
        </form>
        <button type="button" data-testid="send-button" onClick={ this.handleClick }>
          Adicionar filme
        </button>

      </div>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
