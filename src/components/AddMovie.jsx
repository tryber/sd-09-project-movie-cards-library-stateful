import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.buttonCLick = this.buttonCLick.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  getNewMovieStoryline(onSearchTextChange) {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="text-input">
        Sinopse
        <textarea
          onChange={ onSearchTextChange }
          data-testid="storyline-input"
          defaultValue={ storyline }
        />
      </label>
    );
  }

  getNewMovieRating(onSearchTextChange) {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="text-input">
        Avaliação
        <input
          type="number"
          onChange={ onSearchTextChange }
          data-testid="rating-input"
          defaultValue={ rating }
        />
      </label>
    );
  }

  getNewMovieGenre(onSearchTextChange) {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          onChange={ onSearchTextChange }
          data-testid="genre-input"
          defaultValue={ genre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>

        </select>
      </label>
    );
  }

  buttonCLick() {
    this.setState({
      title: 'Star Trek: First Contact',
      subtitle: '',
      imagePath: '',
      storyline: 'gru',
      rating: 0,
      genre: 'action',
    });
    // console.log(this);
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    const { onSearchTextChange } = this.props;
    // console.log(this.state);
    return (
      <form data-testid="add-movie-form" method="get">
        <label data-testid="title-input-label" htmlFor="text-input">
          Título
          <input
            type="text"
            defaultValue={ title }
            // value={ title }
            data-testid="title-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            defaultValue={ subtitle }
            data-testid="subtitle-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            defaultValue={ imagePath }
            data-testid="image-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.buttonCLick }
        >
          Adicionar filme
        </button>
        { this.getNewMovieRating(onSearchTextChange) }
        { this.getNewMovieGenre(onSearchTextChange) }
        {this.getNewMovieStoryline(onSearchTextChange)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default AddMovie;
