import React from 'react';
import PropTypes from 'prop-types';
import TitleForm from './TitleForm';
import StoryLineForm from './StoryLineForm';
import SubTitleInput from './SubtitleInput';
// import ImageInput from './ImageInput';
// import RatingInput from './RatingInput';
// import SelectGender from './SelectGender';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.ResetState = this.ResetState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  ResetState() {
    const { AddMovieOnList } = this.props;
    AddMovieOnList(this.state);
    this.setState({
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    // const { title, storyline, subtitle, imagePath, rating, genre } = this.state;
    const { title, storyline, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <StoryLineForm value={ storyline } handleChange={ this.handleChange } />
          <TitleForm value={ title } handleChange={ this.handleChange } />
          <SubTitleInput value={ subtitle } handleChange={ this.handleChange } />
          {/* <ImageInput value={ imagePath } handleChange={ this.handleChange } />
          <RatingInput value={ rating } handleChange={ this.handleChange } />
          <SelectGender value={ genre } handleChange={ this.handleChange } />
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.ResetState }
          >
            Adicionar filme
          </button> */}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  AddMovieOnList: PropTypes.string,
}.isRequired;

export default AddMovie;
