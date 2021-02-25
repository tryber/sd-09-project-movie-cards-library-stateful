// implement AddMovie component here
import PropTypes from 'prop-types';
import React from 'react';
import SinopseMovie from './components-AddMovie/SinopseMovie';
import RatingMovie from './components-AddMovie/RatingMovie';
import GenreMovie from './components-AddMovie/GenreMovie';
import TitleMovie from './components-AddMovie/TitleMovie';
import SubtitleMovie from './components-AddMovie/SubtitleMovie';
import ImageMovie from './components-AddMovie/ImageMovie';

const firstState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = firstState;
    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleState(state) {
    const { onClick } = this.props;
    onClick(state);
    this.setState(firstState);
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleMovie title={ title } handleChange={ this.handleChange } />
        <SubtitleMovie subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImageMovie imagePath={ imagePath } handleChange={ this.handleChange } />
        <SinopseMovie storyLine={ storyLine } handleChange={ this.handleChange } />
        <RatingMovie rating={ rating } handleChange={ this.handleChange } />
        <GenreMovie genre={ genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.handleState(this.state) }
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
