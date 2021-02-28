import React, { Component } from 'react';
import { func } from 'prop-types';
import '../CSS/add-movie.css';

const defaultState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.inputCreate = this.inputCreate.bind(this);
    this.resetState = this.resetState.bind(this);
    this.state = defaultState;
  }

  handleChange({ target }) {
    const { type, checked, value } = target;
    let { name } = target;
    const valueChange = type === 'checkbox' ? checked : value;
    name = name === 'image' ? 'imagePath' : name;
    this.setState({ [name]: valueChange });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(defaultState);
  }

  inputCreate(type, state, labelName) {
    const arrayState = Object.entries(state);
    return (
      <div className="input-container">
        <label
          htmlFor={ arrayState[0][0] }
          data-testid={ `${arrayState[0][0]}-input-label` }
        >
          {labelName}
          <input
            name={ arrayState[0][0] }
            type={ type }
            value={ arrayState[0][1] }
            onChange={ this.handleChange }
            data-testid={ `${arrayState[0][0]}-input` }
          />
        </label>
      </div>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <div className="form-container">
        <form data-testid="add-movie-form" className="forms">
          { this.inputCreate('text', { title }, 'Título') }
          { this.inputCreate('text', { subtitle }, 'Subtítulo') }
          { this.inputCreate('text', { image: imagePath }, 'Imagem') }
          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={ storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />
          </label>
          { this.inputCreate('number', { rating }, 'Avaliação') }
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
          <div>
            <button
              type="button"
              onClick={ this.resetState }
              data-testid="send-button"
            >
              Adicionar filme
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
