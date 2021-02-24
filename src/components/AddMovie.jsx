// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  title(title, handleClick) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleClick }
        />
      </label>
    );
  }

  subtitle(subtitle, handleClick) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ handleClick }
        />
      </label>
    );
  }

  image(imagePath, handleClick) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ handleClick }
        />
      </label>
    );
  }

  sinopse(storyLine, handleClick) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <input
          name="storyLine"
          value={ storyLine }
          data-testid="storyline-input"
          onChange={ handleClick }
        />
      </label>
    );
  }

  number(rating, handleClick) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleClick }
        />
      </label>
    );
  }

  genre(genre, handleClick) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handleClick }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  buttonHandler(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.title(title, this.handleClick)}
          {this.subtitle(subtitle, this.handleClick)}
          {this.image(imagePath, this.handleClick)}
          {this.sinopse(storyLine, this.handleClick)}
          {this.number(rating, this.handleClick)}
          {this.genre(genre, this.handleClick)}
          <button data-testid="send-button" type="button" onClick={ this.buttonHandler }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
