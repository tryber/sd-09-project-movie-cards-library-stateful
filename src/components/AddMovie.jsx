import React from 'react';
import PropTypes from 'prop-types';
import { TitleInput, SubtitleInput, ImagePath, StorylineInput, RatingInput, GenreInput } from './AddMovieInputs';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChangeTitle(title) {
    this.setState({ title });
  }

  handleChangeSubtitle(subtitle) {
    this.setState({ subtitle });
  }

  handleChangeImagePath(imagePath) {
    this.setState({ imagePath });
  }

  handleChangeStoryline(storyline) {
    this.setState({ storyline });
  }

  handleChangeRating(rating) {
    this.setState({ rating });
  }

  handleChangeGenre(genre) {
    this.setState({ genre });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput
            title={ title }
            onChange={ (value) => this.handleChangeTitle(value) }
          />
          <SubtitleInput
            subtitle={ subtitle }
            onChange={ (value) => this.handleChangeSubtitle(value) }
          />

          <ImagePath
            imagePath={ imagePath }
            onChange={ (value) => this.handleChangeImagePath(value) }
          />

          <StorylineInput
            storyline={ storyline }
            onChange={ (value) => this.handleChangeStoryline(value) }
          />

          <RatingInput
            rating={ rating }
            onChange={ (value) => this.handleChangeRating(value) }
          />

          <GenreInput
            genre={ genre }
            onChange={ (value) => this.handleChangeGenre(value) }
          />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
