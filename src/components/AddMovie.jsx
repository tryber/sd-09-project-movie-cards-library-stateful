import React, { Component } from 'react';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Sinopse from './Sinopse';
import Rating from './Rating';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <Image imagePath={ imagePath } handleChange={ this.handleChange } />
        <Sinopse storyline={ storyline } handleChange={ this.handleChange } />
        <Rating rating={ rating } handleChange={ this.handleChange } />
        <label data-testid="genre-input-label" htmlFor="genre-input">
          Gênero
          <select
            name="genre"
            value={ genre }
            data-testid="genre-input"
            onChange={ this.handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>

        <button
          data-testid="send-button"
          type="button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
