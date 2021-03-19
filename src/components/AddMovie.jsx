import React from 'react';
import PropTypes from 'prop-types';
import TitleForm from './TitleForm';
import StoryLineForm from './StoryLineForm';
import SubTitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import RatingInput from './RatingInput';

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
    const { addMovieOnList } = this.props;
    addMovieOnList(this.state);
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
    const { title, storyline, subtitle, imagePath, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <StoryLineForm value={ storyline } handleChange={ this.handleChange } />
          <TitleForm value={ title } handleChange={ this.handleChange } />
          <SubTitleInput value={ subtitle } handleChange={ this.handleChange } />
          <ImageInput value={ imagePath } handleChange={ this.handleChange } />
          <RatingInput value={ rating } handleChange={ this.handleChange } />
          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              id="genre"
              name="genre"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.handleChange }
              htmlFor="genre"
            >
              {/* <option data-testid="genre-option" value="">Todos</option> */}
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
          {/* <SelectGender value={ genre } handleChange={ this.handleChange } /> */}
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.ResetState }
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  AddMovieOnList: PropTypes.string,
}.isRequired;

export default AddMovie;
