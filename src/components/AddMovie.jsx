import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.resetState = this.resetState.bind(this);

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
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  resetState() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addMovie() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    onClick({ subtitle, title, imagePath, storyline, rating, genre });
    this.resetState();
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TitleInput value={ title } onChange={ this.handleChange } />
        {/* <label htmlFor="movieTitle" data-testid="title-input-label">
          Título
          <input id="movieTitle" type="text" name="title" data-testid="title-input" value={ title } onChange={ this.handleChange } />
        </label> */}
        <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        {/* <label htmlFor="movieSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input id="movieSubtitle" type="text" name="subtitle" data-testid="subtitle-input" value={ subtitle } onChange={ this.handleChange } />
        </label> */}
        <ImageInput value={ imagePath } onChange={ this.handleChange } />
        {/* <label htmlFor="imgPath" data-testid="image-input-label">
          Imagem
          <input id="imgPath" type="text" name="imagePath" data-testid="image-input" value={ imagePath } onChange={ this.handleChange } />
        </label> */}
        <StorylineInput value={ storyline } onChange={ this.handleChange } />
        {/* <label htmlFor="storyLineText" data-testid="storyline-input-label">
          Sinopse
          <textarea id="storyLineText" type="text" name="storyline" data-testid="storyline-input" value={ storyline } onChange={ this.handleChange } />
        </label> */}
        <RatingInput value={ rating } onChange={ this.handleChange } />
        {/* <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input id="rating" type="number" name="rating" data-testid="rating-input" value={ rating } onChange={ this.handleChange } />
        </label> */}
        <label htmlFor="genre" data-testid="genre-input-label">
          Gênero
          <select
            id="genre"
            type="text"
            name="genre"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="button" data-testid="send-button" onClick={ this.addMovie }>
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
