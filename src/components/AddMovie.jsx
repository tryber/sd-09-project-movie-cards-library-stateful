import React, { Component } from 'react';
import PropTypes from 'prop-types';
import New from './New';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.addFilm = this.addFilm.bind(this);
    // this.cleanSetState = this.cleanSetState.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  addFilm() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form
        className="add-movie"
        data-testid="add-movie-form"
        onChange={ this.handleChange }
      >
        <New name="title" type="text" t="Título" val={ title } test="title" />
        <New name="subtitle" type="text" t="Subtítulo" val={ subtitle } test="subtitle" />
        <New name="imagePath" type="text" t="Imagem" val={ imagePath } test="image" />
        <label htmlFor="storyLine" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="storyLine"
            name="storyLine"
            value={ storyLine }
            data-testid="storyline-input"
          />
        </label>
        <New name="rating" type="number" t="Avaliação" val={ rating } test="rating" />
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select name="genre" id="genre" value={ genre } data-testid="genre-input">
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.addFilm }
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
