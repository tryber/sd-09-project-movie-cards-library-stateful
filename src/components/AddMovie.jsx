// implement AddMovie component here
import PropTypes from 'prop-types';
import React from 'react';
import SinopseMovie from './SinopseMovie';
import RatingMovie from './RatingMovie';
import GenreMovie from './GenreMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.createInputTextJSX = this.createInputTextJSX.bind(this);
    this.saveAndReset = this.saveAndReset.bind(this);
    this.getLastState = this.getLastState.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getLastState(state) {
    const { subtitle, title, imagePath, storyLine, rating, genre } = state;
    const olderState = {
      title,
      subtitle,
      storyline: storyLine,
      rating,
      imagePath,
      bookmarked: false,
      genre,
    };
    return olderState;
  }

  saveAndReset(state) {
    const { addMovieToList } = this.props;
    const newMovie = this.getLastState(state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
    return addMovieToList(newMovie);
  }

  createInputTextJSX(labelText, stateKey, stateValue, nameElement) {
    return (
      <label data-testid={ `${stateKey}-input-label` } htmlFor={ `${stateKey}-input` }>
        {labelText}
        <input
          data-testid={ `${stateKey}-input` }
          id={ `${stateKey}-input` }
          type="text"
          name={ nameElement }
          value={ stateValue }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.createInputTextJSX('Título', 'title', title, 'title')}
        {this.createInputTextJSX('Subtítulo', 'subtitle', subtitle, 'subtitle')}
        {this.createInputTextJSX('Imagem', 'image', imagePath, 'imagePath')}
        <SinopseMovie storyLine={ storyLine } handleChange={ this.handleChange } />
        <RatingMovie rating={ rating } handleChange={ this.handleChange } />
        <GenreMovie genre={ genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.saveAndReset(this.state) }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = { addMovieToList: PropTypes.func }.isRequired;
AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
  bookmarked: PropTypes.bool,
  genre: PropTypes.string,
}.isRequired;

export default AddMovie;
