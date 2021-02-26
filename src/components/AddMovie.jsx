// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };

    this.addMovieTextInput = this.addMovieTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    });
  }

  addMovieTextInput({ target }) {
    const { name, value } = target;
    return (this.setState({ [name]: value }));
  }

  inputText(title, onSearchTextChange) {
    return (
      <Input
        description="Título"
        type="text"
        value={ title }
        datatestid="title-input"
        datatestidLab="title-input-label"
        name="title"
        onChange={ onSearchTextChange }
      />
    );
  }

  inputCaption(subtitle, onSearchTextChange) {
    return (
      <Input
        description="Subtítulo"
        type="text"
        value={ subtitle }
        datatestid="subtitle-input"
        datatestidLab="subtitle-input-label"
        name="subtitle"
        onChange={ onSearchTextChange }
      />
    );
  }

  inputImage(imagePath, onSearchTextChange) {
    return (
      <Input
        description="Imagem"
        type="text"
        value={ imagePath }
        datatestid="image-input"
        datatestidLab="image-input-label"
        name="imagePath"
        onChange={ onSearchTextChange }
      />
    );
  }

  textArea(storyline, onSearchTextChange) {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          data-testid="storyline-input"
          name="storyline"
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }

  inputScore(rating, onSearchTextChange) {
    return (
      <Input
        description="Avaliação"
        type="number"
        value={ rating }
        datatestid="rating-input"
        datatestidLab="rating-input-label"
        name="rating"
        onChange={ onSearchTextChange }
      />
    );
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.inputText(title, this.addMovieTextInput)}
        {this.inputCaption(subtitle, this.addMovieTextInput)}
        {this.inputImage(imagePath, this.addMovieTextInput)}
        {this.textArea(storyline, this.addMovieTextInput)}
        {this.inputScore(rating, this.addMovieTextInput)}
        <label htmlFor="genre-input" data-testid="genre-input-label">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            onChange={ this.addMovieTextInput }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
