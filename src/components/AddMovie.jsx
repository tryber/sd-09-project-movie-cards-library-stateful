// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
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
  // href https://stackoverflow.com/questions/55188257/const-name-value-event-target-what-does-this-mean/55188322

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

  imagePath(imagePath, handleClick) {
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

  storyLine(storyLine, handleClick) {
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

  rating(rating, handleClick) {
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
          {this.imagePath(imagePath, this.handleClick)}
          {this.storyLine(storyLine, this.handleClick)}
          {this.rating(rating, this.handleClick)}
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
