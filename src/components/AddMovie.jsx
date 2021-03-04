import React from 'react';
import PropTypes from 'prop-types';
import TitleLabel from './TitleLabel';
import SubtitleLabel from './SubtitleLabel';
import StorylineLabel from './StorylineLabel';
import RatingLabel from './RatingLabel';
import GenreLabel from './GenreLabel';
import ImageLabel from './ImageLabel';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.changeStateValue = this.changeStateValue.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeStateValue({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { changeStateValue } = this;
    const { onClick } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleLabel title={ title } changeStateValue={ changeStateValue } />
        <SubtitleLabel subtitle={ subtitle } changeStateValue={ changeStateValue } />
        <ImageLabel imagePath={ imagePath } changeStateValue={ changeStateValue } />
        <StorylineLabel storyline={ storyline } changeStateValue={ changeStateValue } />
        <RatingLabel rating={ rating } changeStateValue={ changeStateValue } />
        <GenreLabel genre={ genre } changeStateValue={ changeStateValue } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ onClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
