// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleAddMovie from './TitleAddMovie';
import SubtitleAddMovie from './SubtitleAddMovie';
import ImageAddMovie from './ImageAddMovie';
import StorylineAddMovie from './StorylineAddMovie';
import RatingAddMovie from './RatingAddMovie';
import GenreAddMovie from './GenreAddMovie';
import ButtonAddMovie from './ButtonAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.manipulatesStateAddMovies = this.manipulatesStateAddMovies.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleFormFieldChange({ target: { name, value } }) {
    if (name === 'rating') {
      return this.setState({ [name]: parseFloat(value) });
    }
    return this.setState({ [name]: value });
  }

  manipulatesStateAddMovies(onClick) {
    onClick(this.state);
    const initialState = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState(initialState);
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleAddMovie
          value={ title }
          handleFormFieldChange={ this.handleFormFieldChange }
        />
        <SubtitleAddMovie
          value={ subtitle }
          handleFormFieldChange={ this.handleFormFieldChange }
        />
        <ImageAddMovie
          value={ imagePath }
          handleFormFieldChange={ this.handleFormFieldChange }
        />
        <StorylineAddMovie
          value={ storyline }
          handleFormFieldChange={ this.handleFormFieldChange }
        />
        <RatingAddMovie
          value={ rating }
          handleFormFieldChange={ this.handleFormFieldChange }
        />
        <GenreAddMovie
          value={ genre }
          handleFormFieldChange={ this.handleFormFieldChange }
        />
        <ButtonAddMovie
          manipulatesStateAddMovies={ this.manipulatesStateAddMovies }
          onClick={ onClick }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
