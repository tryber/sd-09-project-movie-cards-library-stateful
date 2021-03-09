// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import TitleAdd from './titleAdd';
import SubtitleAdd from './SubtitleAdd';
import ImagePathAdd from './imagePathAdd';
import StorylineAdd from './StorylineAdd';
import RatingAdd from './RatingAdd';
import GenreAdd from './GenreAdd';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.buttonSave = this.buttonSave.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',  
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  buttonSave() {
    const { props: { onClick } } = this;
    onClick(this.state);
    this.setState({
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
          <TitleAdd title={ title } handleChange={ this.handleChange } />
          <SubtitleAdd subtitle={ subtitle } handleChange={ this.handleChange } />
          <ImagePathAdd imagePath={ imagePath } handleChange={ this.handleChange } />
          <StorylineAdd storyline={ storyline } handleChange={ this.handleChange } />
          <RatingAdd rating={ rating } handleChange={ this.handleChange } />
          <GenreAdd genre={ genre } handleChange={ this.handleChange } />
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.buttonSave }
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
