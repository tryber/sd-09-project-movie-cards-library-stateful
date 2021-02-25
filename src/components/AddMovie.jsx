import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.InputTitle = this.InputTitle.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handlerChange(event) {
    const { name, value, type } = event.target;
    if (type !== 'checkbox') {
      this.setState({
        [name]: value,
      });
    } else {
      this.setState({
        genre: value,
      });
    }
  }

  onClick() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  InputTitle(title, handlerChange) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ title }
          onChange={ handlerChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  InputSubtitle(subtitle, handlerChange) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ handlerChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  InputImagePath(imagePath, handlerChange) {
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ handlerChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  StoryLine(storyline, handlerChange) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ handlerChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  Rating(rating, handlerChange) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ rating }
          onChange={ handlerChange }
          data-testid="rating-input"
        />
      </label>
    );
  }

  Genre(genre, handlerChange) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ handlerChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          { this.InputTitle(title, this.handlerChange) }
          { this.InputSubtitle(subtitle, this.handlerChange) }
          { this.InputImagePath(imagePath, this.handlerChange) }
          { this.StoryLine(storyline, this.handlerChange) }
          { this.Rating(rating, this.handlerChange) }
          { this.Genre(genre, this.handlerChange) }
        </form>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.onClick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default AddMovie;
