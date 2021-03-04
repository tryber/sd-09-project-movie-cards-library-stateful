import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';

const initialState = {
  title: '',
  subtitle: '',
  storyline: '',
  rating: 0,
  imagePath: '',
  bookmarked: false,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleInput = this.handleInput.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    this.setState(initialState);
  }

  render() {
    const { state, handleInput, props, resetState } = this;
    const { title, subtitle, imagePath, storyline, rating, genre } = state;
    const { onClick } = props;
    return (
      <form data-testid="add-movie-form">
        <InputText testId="title-input" val={ title } evtFunc={ handleInput } />
        <InputText testId="subtitle-input" val={ subtitle } evtFunc={ handleInput } />
        <InputText testId="image-input" val={ imagePath } evtFunc={ handleInput } />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            type="text"
            name="storyline"
            id="storyline-input"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ handleInput }
          />
        </label>
        <InputText testId="rating-input" val={ rating } evtFunc={ handleInput } />
        <label htmlFor="genre-select" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre-select"
            data-testid="genre-input"
            onChange={ handleInput }
            value={ genre }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ (event) => {
            event.preventDefault();
            onClick(state);
            resetState();
          } }
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
