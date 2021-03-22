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
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.stateReset = this.stateReset.bind(this);
  }

  changeHandler({ target }) {
    this.setState({
      [target.name]: target.value,
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

  storyLineTextarea() {
    const { storyLine } = this.state;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="30"
          rows="3"
          data-testid="storyline-input"
          id="storyline"
          name="storyLine"
          value={ storyLine }
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

  stateReset() {
    const { onClick } = this.props;
    onClick();
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
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
          {this.storyLineTextarea()}
        </div>
        <div>
          {this.ratingInput()}
        </div>
        <div>
          {this.selectInput()}
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
