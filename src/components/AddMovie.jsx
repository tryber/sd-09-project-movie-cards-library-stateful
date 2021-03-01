import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.buttonCLick = this.buttonCLick.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  getNewMovieStoryline() {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="text-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ storyline }
          name="storyline"
          onChange={ this.changeHandler }
        />
      </label>
    );
  }

  getNewMovieRating() {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="text-input">
        Avaliação
        <input
          type="number"
          name="rating"
          onChange={ this.changeHandler }
          data-testid="rating-input"
          value={ rating }
        />
      </label>
    );
  }

  getNewMovieGenre() {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          name="genre"
          onChange={ this.changeHandler }
          data-testid="genre-input"
          value={ genre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>

        </select>
      </label>
    );
  }

  buttonCLick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }, () => console.log(this.state));
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => console.log(this.state));
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    const { onSearchTextChange } = this.props;
    console.log();
    return (
      <form data-testid="add-movie-form" method="get">
        <label data-testid="title-input-label" htmlFor="text-input">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
            name="title"
            onChange={ this.changeHandler }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            name="subtitle"
            onChange={ this.changeHandler }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            name="imagePath"
            onChange={ this.changeHandler }
          />
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.buttonCLick }
        >
          Adicionar filme
        </button>
        { this.getNewMovieRating() }
        { this.getNewMovieGenre() }
        { this.getNewMovieStoryline(onSearchTextChange) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default AddMovie;
