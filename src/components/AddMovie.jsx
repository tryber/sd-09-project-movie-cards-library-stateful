import React from 'react';
import PropTypes from 'prop-types';
import TitleForms from './TitleForms';
import SubtitleForms from './SubtitleForms';
import ImageForms from './ImageForms';
import StorylineForms from './StorylineForms';
import RatingForms from './RatingForms';
import GenreForms from './GenreForms';
import ButtonAddMovieForms from './ButtonAddMovieForms';

/* Este componente precisa ter o estado a ser gerenciado */

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.stateChange = this.stateChange.bind(this);
    this.setClick = this.setClick.bind(this);
  }

  setClick() {
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    const { addMovie } = this.props;
    addMovie({ title, subtitle, storyline, rating, imagePath, genre });
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  stateChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
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
        <TitleForms title={ title } stateChange={ this.stateChange } />
        <SubtitleForms subtitle={ subtitle } stateChange={ this.stateChange } />
        <ImageForms imagePath={ imagePath } stateChange={ this.stateChange } />
        <StorylineForms storyline={ storyline } stateChange={ this.stateChange } />
        <RatingForms rating={ rating } stateChange={ this.stateChange } />
        <GenreForms genre={ genre } stateChange={ this.stateChange } />
        <ButtonAddMovieForms setClick={ this.setClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default AddMovie;
