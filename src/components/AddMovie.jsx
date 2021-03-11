import React, { Component } from 'react';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: value,
    });
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title handleChange={ this.handleChange } title={ title } />
          <Subtitle handleChange={ this.handleChange } title={ subtitle } />
          <Image handleChange={ this.handleChange } title={ imagePath } />
          <label data-testid="storyline-input-label" htmlFor="story-line">
            Sinopse
            <textarea
              value={ storyline }
              data-testid="storyline-input"
              name="story-line"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="rating-input-label" htmlFor="rating">
            Avaliação
            <input
              type="number"
              name="rating"
              value={ rating }
              data-testid="rating-input"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero:
            <select
              name="genre"
              defaultValue={ genre }
              data-testid="genre-input"
              onChange={ this.handleChange }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          <button type="submit" data-testid="send-button">
            Send it
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
