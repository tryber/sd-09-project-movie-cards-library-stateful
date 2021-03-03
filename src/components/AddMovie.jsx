import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInputText from './FormInputText';
import GenreSelect from './GenreSelect';
import RatingInput from './RatingInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    const { title, subtitle, storyline, rating, imagePath, genre } = this.state;
    const movie = {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      genre,
    };
    onClick(movie);
    Object.keys(this.state).forEach((state) => (state === 'rating'
      ? this.setState({ [state]: 0 }) : this.setState({ [state]: '' })));
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <FormInputText
            labelText="Título"
            name="title"
            value={ title }
            onChange={ this.handleChange }
          />
          <FormInputText
            labelText="Subtítulo"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
          />
          <label data-testid="image-input-label" htmlFor="imagePath">
            Imagem
            <input
              name="imagePath"
              type="text"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.handleChange }
              id="imagePath"
            />
          </label>
          <FormInputText
            labelText="Sinopse"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
          />
          <RatingInput
            value={ rating }
            onChange={ this.handleChange }
          />
          <GenreSelect
            value={ genre }
            onChange={ this.handleChange }
          />
          <button data-testid="send-button" onClick={ this.handleClick } type="button">
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
