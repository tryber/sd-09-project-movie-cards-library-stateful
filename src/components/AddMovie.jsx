// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.stateReset = this.stateReset.bind(this);
  }

  changeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  checkboxHandler({ target }) {
    this.setState({
      [target.name]: target.checked,
    });
  }

  titleInput() {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          id="title"
          name="title"
          value={ title }
          onChange={ this.changeHandler }
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
          type="text"
          data-testid="subtitle-input"
          id="subtitle"
          name="subtitle"
          value={ subtitle }
          onChange={ this.changeHandler }
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
          type="text"
          data-testid="image-input"
          id="image"
          name="imagePath"
          value={ imagePath }
          onChange={ this.changeHandler }
        />
      </label>
    );
  }

  storylineTextarea() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="30"
          rows="3"
          data-testid="storyline-input"
          id="storyline"
          name="storyline"
          value={ storyline }
          onChange={ this.changeHandler }
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
          data-testid="rating-input"
          id="rating"
          name="rating"
          value={ rating }
          onChange={ this.changeHandler }
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
          id="genre"
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.changeHandler }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  bookmarkedCheckbox() {
    const { bookmarked } = this.state;
    return (
      <label htmlFor="bookmarked" data-testid="bookmarked-input-label">
        Favorito
        <input
          type="checkbox"
          data-testid="bookmarked-input"
          id="bookmarked"
          name="bookmarked"
          value={ bookmarked }
          onChange={ this.checkboxHandler }
        />
      </label>
    );
  }

  stateReset() {
    const { onClick } = this.props;
    const newMovie = this.state;
    onClick(newMovie);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
      bookmarked: false,
    });
  }

  sendButton() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.stateReset }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <div>
          {this.titleInput()}
        </div>
        <div>
          {this.subtitleInput()}
        </div>
        <div>
          {this.imageInput()}
        </div>
        <div>
          {this.storylineTextarea()}
        </div>
        <div>
          {this.ratingInput()}
        </div>
        <div>
          {this.selectInput()}
        </div>
        <div>
          {this.bookmarkedCheckbox()}
        </div>
        <div>
          {this.sendButton()}
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
