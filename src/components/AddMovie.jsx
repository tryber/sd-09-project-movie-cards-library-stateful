// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSubtitle = this.onChangeSubtitle.bind(this);
    this.onChangeStoryline = this.onChangeStoryline.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeRating = this.onChangeRating.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.addButtonListener = this.addButtonListener.bind(this);
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  onChangeSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  onChangeStoryline(event) {
    this.setState({ storyline: event.target.value });
  }

  onChangeGenre(event) {
    this.setState({ genre: event.target.value });
  }

  onChangeRating(event) {
    this.setState({ rating: event.target.value });
  }

  onChangeImage(event) {
    this.setState({ imagePath: event.target.value });
  }

  addButtonListener() {
    const newMovie = this.state;
    const { onClick } = this.props;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(newMovie);
  }

  addMovieTitleInput() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.onChangeTitle }
        />
      </label>
    );
  }

  addMovieSubtitleInput() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.onChangeSubtitle }
        />
      </label>
    );
  }

  addMovieStorylineInput() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          data-testid="storyline-input"
          cols="30"
          rows="10"
          value={ storyline }
          onChange={ this.onChangeStoryline }
        />
      </label>
    );
  }

  addMovieImageInput() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.onChangeImage }
        />
      </label>
    );
  }

  addMovieRatingInput() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.onChangeRating }
        />
      </label>
    );
  }

  addMovieGenreSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select data-testid="genre-input" value={ genre } onChange={ this.onChangeGenre }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  addMovieButton() {
    return (
      <button
        data-testid="send-button"
        type="button"
        onClick={ this.addButtonListener }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.addMovieTitleInput()}
        {this.addMovieSubtitleInput()}
        {this.addMovieGenreSelect()}
        {this.addMovieStorylineInput()}
        {this.addMovieImageInput()}
        {this.addMovieRatingInput()}
        {this.addMovieButton()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
