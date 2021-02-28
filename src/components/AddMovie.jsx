import React from 'react';
import PropTypes from 'prop-types';
import { TitleInput, SubtitleInput, ImagePath, StorylineInput } from './AddMovieInputs';

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

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
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
            value={ imagePath }
            onChange={ (value) => this.handleChangeImagePath(value) }
          />

          <StorylineInput
            value={ storyline }
            onChange={ (value) => this.handleChangeStoryline(value) }
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
