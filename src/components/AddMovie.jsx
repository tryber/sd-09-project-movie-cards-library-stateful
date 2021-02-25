import React, { Component } from 'react';
import { func } from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputCreate = this.inputCreate.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  inputCreate(type, stateKey, stateValue, labelName) {
    return (
      <label htmlFor={ stateKey } data-testid={ `${stateKey}-input-label` }>
        {labelName}
        <input
          name={ stateKey }
          type={ type }
          value={ stateValue }
          onChange={ this.handleChange }
          data-testid={ `${stateKey}-input` }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        { this.inputCreate('text', 'title', title, 'Título') }
        { this.inputCreate('text', 'subtitle', subtitle, 'Subtítulo') }
        { this.inputCreate('text', 'imagePath', imagePath, 'Imagem') }
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
        { this.inputCreate('number', 'rating', rating, 'Avaliação') }
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ onClick }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
