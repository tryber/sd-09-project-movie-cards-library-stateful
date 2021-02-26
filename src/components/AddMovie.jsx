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
    const { onClick } = this.props;
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

  titleElement() {
    return (
      <label htmlFor='title-input' data-testid='title-input-label'>
        Título
        <input
          name='title'
          type='text'
          id='title-input'
          data-testid='title-input'
          value={this.state.title}
          onChange={this.updateState}
        />
      </label>
    );
  }

  subtitleElement() {
    return (
      <label htmlFor='' data-testid='subtitle-input-label'>
        Subtítulo
        <input
          name='subtitle'
          value={this.state.subtitle}
          type='text'
          id='subtitle-input'
          data-testid='subtitle-input'
          onChange={this.updateState}
        />
      </label>
    );
  }

  imageElement() {
    return (
      <label htmlFor='image-input' data-testid='image-input-label'>
        Imagem
        <input
          name='imagePath'
          type='text'
          data-testid='image-input'
          onChange={this.updateState}
        />
      </label>
    );
  }

  storylineElement() {
    return (
      <label htmlFor='storyline-input' data-testid='storyline-input-label'>
        Sinopse
        <textarea
          name='storyline'
          id='storyline-input'
          data-testid='storyline-input'
          cols='30'
          rows='10'
          onChange={this.updateState}
          value={this.state.storyline}
        ></textarea>
      </label>
    );
  }

  ratingElement() {
    return (
      <label htmlFor='rating-input' data-testid='rating-input-label'>
        Avaliação
        <input
          type='number'
          name='rating'
          id='rating-input'
          data-testid='rating-input'
          onChange={this.updateState}
          value={this.state.rating}
        />
      </label>
    );
  }

  genreElement() {
    return (
      <label htmlFor='genre-input' data-testid='genre-input-label'>
        Gênero
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
      </label>
    );
  }

  render() {
    return (
      <form action='' data-testid='add-movie-form'>
        {this.titleElement()}
        {this.subtitleElement()}
        {this.imageElement()}
        {this.storylineElement()}
        {this.ratingElement()}
        {this.genreElement()}
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
