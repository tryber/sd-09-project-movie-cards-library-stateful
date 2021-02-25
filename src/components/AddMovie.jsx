import React from 'react';
import { func } from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setStateInitialValue = this.setStateInitialValue.bind(this);
    this.createInput = this.createInput.bind(this);
    this.createTextArea = this.createTextArea.bind(this);
    this.createSelect = this.createSelect.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  setStateInitialValue() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  createInput(type, stateKey, dataTestId, value) {
    return (
      <input
        type={ type }
        id={ stateKey }
        name={ stateKey }
        data-testid={ dataTestId }
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  createTextArea(value) {
    return (
      <textarea
        id="storyline"
        name="storyline"
        cols="30"
        rows="10"
        data-testid="storyline-input"
        value={ value }
        onChange={ this.handleChange }
      />
    );
  }

  createSelect(value) {
    return (
      <select
        id="genre"
        name="genre"
        data-testid="genre-input"
        value={ value }
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title" data-testid="title-input-label">
            Título
            { this.createInput('text', 'title', 'title-input', title) }
          </label>

          <label htmlFor="subtitle" data-testid="subtitle-input-label">
            Subtítulo
            { this.createInput('text', 'subtitle', 'subtitle-input', subtitle) }
          </label>

          <label htmlFor="imagePath" data-testid="image-input-label">
            Imagem
            { this.createInput('text', 'imagePath', 'image-input', imagePath) }
          </label>

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            { this.createTextArea(storyline) }
          </label>

          <label htmlFor="rating" data-testid="rating-input-label">
            Avaliação
            { this.createInput('number', 'rating', 'rating-input', rating) }
          </label>

          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            { this.createSelect(genre) }
          </label>

          <button
            data-testid="send-button"
            onClick={ this.setStateInitialValue }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: func,
};

export default AddMovie;
