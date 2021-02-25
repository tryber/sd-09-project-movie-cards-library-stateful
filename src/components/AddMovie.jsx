// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.sendButton = this.sendButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title" data-testid="title-input-label">
          <span>Título</span>
          <input
            type="text"
            name="title"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          <span>Subtítulo</span>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          <span>Imagem</span>
          <input
            type="text"
            name="imagePath"
            id="imagePath"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          <span>Sinopse</span>
          <textarea
            name="storyline"
            id="storyline"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleChange }
            maxLength="185"
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          <span>Avaliação</span>
          <input
            type="number"
            name="rating"
            id="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ this.handleChange }
            min="0"
            max="5"
            step=".1"
          />
        </label>
        <label htmlFor="genre" data-testid="genre-input-label">
          <span>Gênero</span>
          <select
            name="genre"
            id="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
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
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.sendButton }
        >
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
