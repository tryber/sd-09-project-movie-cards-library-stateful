import React from 'react';
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
    this.buttonAdd = this.buttonAdd.bind(this);
  }

  stateChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonAdd() {
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
        <ButtonAddMovieForms buttonAdd={ this.buttonAdd } />
      </form>
    );
  }
}

export default AddMovie;
