import React, { Component } from 'react';

class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState = {
      [name]: value,
    };
  }

  handleInputs({ type, dataTestId, name, id, value }) {
    return (
      <input
        type={ type }
        data-testid={ dataTestId }
        name={ name }
        id={ id }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  handleSelectInput(genre) {
    return (
      <select
        name="selectedGenre"
        id="genreSelect"
        data-testid="genre-input"
        value={ genre }
        onChange={ this.handleChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título
          { this.handleInputs('text', 'title-input', 'title', 'inputTitle', title) }
        </label>
        <label data-testid="subtitle-input-label" htmlFor="inputSubTitle">
          Subtítulo
          { this.handleInputs(
            'text', 'subtitle-input', 'subtitle', 'inputSubTitle', subtitle
          ) }
        </label>
        <label data-testid="image-input-label" htmlFor="imageInput">
          Imagem
          { this.handleInputs(
            'text', 'image-input', 'imagePath', 'imageInput', imagePath
          ) }
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyLineInput">
          Sinopse
          <textarea
            data-testid="image-input"
            id="storyLineInput"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="ratingInput">
          Avaliação
          { this.handleInputs('number', 'rating-input', 'rating', 'ratingInput', rating) }
        </label>
        <label data-testid="genre-input-label" htmlFor="genreSelect">
          Gênero
          { this.handleSelectInput(genre) }
        </label>
      </form>
    );
  }
}
export default AddMovie;
