import React, { Component } from 'react';
import TitleField from './FormAddMovie/TitleField';
import SubtitleField from './FormAddMovie/SubtitleField';
import ImageField from './FormAddMovie/ImageField';

export default class AddMovie extends Component {
  constructor(state) {
    super(state);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      {
        title: '',
        subtitle: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      },
    );
  }

  render() {
    const { genre, title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleField handleChange={ this.handleChange } title={ title } />
        <SubtitleField handleChange={ this.handleChange } subtitle={ subtitle } />
        <ImageField handleChange={ this.handleChange } imagePath={ imagePath } />
        <label
          htmlFor="input-sinopse"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            type="text"
            data-testid="storyline-input"
            onChange={ this.handleChange }
            value={ storyline }
            name="storyline"
          />
        </label>
        <label htmlFor="input-rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            data-testid="rating-input"
            onChange={ this.handleChange }
            value={ rating }
            name="rating"
          />
        </label>
        <label htmlFor="input-genre" data-testid="genre-input-label">
          Gênero
          <select
            type="checkbox"
            data-testid="genre-input"
            onChange={ this.handleChange }
            value={ genre }
            name="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleSubmit } data-testid="send-button">
          Adicionar filme
        </button>
      </form>
    );
  }
}
