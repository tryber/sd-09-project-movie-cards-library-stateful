import React from 'react';
import TitleForm from './TitleForm';
import StoryLineForm from './StoryLineForm';
import SubTitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import RatingInput from './RatingInput';
import SelectGender from './SelectGender';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      genre: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, storyline, subtitle, imagePath, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleForm value={ title } handleChange={ this.handleChange } />
          <StoryLineForm value={ storyline } handleChange={ this.handleChange } />
          <SubTitleInput value={ subtitle } handleChange={ this.handleChange } />
          <ImageInput value={ imagePath } handleChange={ this.handleChange } />
          <RatingInput value={ rating } handleChange={ this.handleChange } />
          <SelectGender value={ genre } handleChange={ this.handleChange } />
          
        </form>
      </div>
    );
  }
}
