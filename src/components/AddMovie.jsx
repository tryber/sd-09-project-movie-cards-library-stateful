import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
    this.resetState = this.resetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  updateState({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  resetState() {
    const { onClick } = this.props
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    return (
      <form action='' data-testid='add-movie-form'>
        <label htmlFor='title-input' data-testid='title-input-label'>
          Título
        </label>
        <input
          name='title'
          type='text'
          id='title-input'
          data-testid='title-input'
          value={this.state.title}
          onChange={this.updateState}
        />
        <label htmlFor='' data-testid='subtitle-input-label'>
          Subtítulo
        </label>
        <input
          name='subtitle'
          value={this.state.subtitle}
          type='text'
          id='subtitle-input'
          data-testid='subtitle-input'
          onChange={this.updateState}
        />
        <label htmlFor='image-input' data-testid='image-input-label'>
          Imagem
        </label>
        <input
          name='imagePath'
          type='text'
          data-testid='image-input'
          onChange={this.updateState}
        />
        <label htmlFor='storyline-input' data-testid='storyline-input-label'>
          Sinopse
        </label>
        <textarea
          name='storyline'
          id='storyline-input'
          data-testid='storyline-input'
          cols='30'
          rows='10'
          onChange={this.updateState}
          value={this.state.storyline}
        ></textarea>
        <label htmlFor='rating-input' data-testid='rating-input-label'>
          Avaliação
        </label>
        <input
          type='number'
          name='rating'
          id='rating-input'
          data-testid='rating-input'
          onChange={this.updateState}
          value={this.state.rating}
        />
        <label htmlFor='genre-input' data-testid='genre-input-label'>
          Gênero
        </label>
        <select
          name='genre'
          id='genre-input'
          data-testid='genre-input'
          value={this.state.genre}
          onChange={this.updateState}
        >
          <option data-testid='genre-option' value='action'>
            Ação
          </option>
          <option data-testid='genre-option' value='comedy'>
            Comédia
          </option>
          <option data-testid='genre-option' value='thriller'>
            Suspense
          </option>
        </select>
        <button data-testid='send-button' onClick={this.resetState}>
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
