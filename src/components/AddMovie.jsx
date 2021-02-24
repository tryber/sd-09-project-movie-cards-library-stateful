/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const onClick = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="ti-tle" data-testid="title-input-label">
          Título
          <input
            id="ti-tle"
            data-testid="title-input"
            name="title"
            type="text"
            value={ title }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="sub-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="sub-input"
            data-testid="subtitle-input"
            name="subtitle"
            type="text"
            value={ subtitle }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="image-path" data-testid="subtitle-input-label">
          Imagem
          <input
            id="image-path"
            data-testid="image-input"
            name="imagePath"
            type="text"
            value={ imagePath }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="synopsis" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="synopsis"
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            data-testid="rating-input"
            name="rating"
            type="number"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="gender" data-testid="genre-input-label">
          Gênero
          <select
            id="gender"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          type="submit"
          onClick={ onClick }
        >
          Adicionar Filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
