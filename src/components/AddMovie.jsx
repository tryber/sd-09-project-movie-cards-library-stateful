import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Title from './Title';
import Subtitle from './Subtitle';
import Rating from './Rating';

class AddMovie extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    onClick(subtitle, title, imagePath, storyline, rating, genre);
    this.setState = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title handleChange={ this.handleChange } value={ title } />
          <Subtitle handleChange={ this.handleChange } value={ subtitle } />
          <Image handleChange={ this.handleChange } value={ imagePath } />
          <Rating handleChange={ this.handleChange } value={ rating } />
          <label data-testid="storyline-input-label" htmlFor="story-line">
            Sinopse
            <textarea
              value={ storyline }
              data-testid="storyline-input"
              name="story-line"
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
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
