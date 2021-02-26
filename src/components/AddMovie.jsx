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
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>

        </select>
      </label>
    );
  }

  buttonCLick() {
    this.setState({
      title: 'Star Trek: First Contact',
    });
    // console.log(this);
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    const { onSearchTextChange } = this.props;
    // console.log(this.state);
    return (
      <form data-testid="add-movie-form" method="get">
        <label data-testid="title-input-label" htmlFor="text-input">
          Título
          <input
            type="text"
            defaultValue={ title }
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
        <label data-testid="storyline-input-label" htmlFor="text-input">
          Sinopse
          <textarea
            defaultValue={ storyline }
            data-testid="storyline-input"
            onChange={ onSearchTextChange }
          />
        </label>
        <button type="button" onClick={ this.buttonCLick }>Add Movie</button>
        { this.getNewMovieRating(onSearchTextChange) }
        { this.getNewMovieGenre(onSearchTextChange) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default AddMovie;
