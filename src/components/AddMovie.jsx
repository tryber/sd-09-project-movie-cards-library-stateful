import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParentInput from './ParentInput';

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
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState = {
      [name]: value,
    };
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
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <ParentInput
          type="text"
          name="title"
          value={ title }
          lblTitle="Título"
        />
        <ParentInput
          type="text"
          name="subtitle"
          value={ subtitle }
          lblTitle="Subtítulo"
        />
        <ParentInput
          type="text"
          name="imagePath"
          value={ imagePath }
          lblTitle="Imagem"
        />
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
        <ParentInput type="number" name="rating" value={ rating } lblTitle="Avaliação" />
        <label data-testid="genre-input-label" htmlFor="genreSelect">
          Gênero
          { this.handleSelectInput(genre) }
        </label>
        <button data-testid="send-button" type="reset" onClick={ onClick(this.state) }>
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
