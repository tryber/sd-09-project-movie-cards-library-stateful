import React from 'react';
import GenInput from './GenInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      gender: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectGender = this.selectGender.bind(this);
    this.renderStoryline = this.renderStoryline.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  renderStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-id" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-id"
          data-testid="storyline-input"
          onChange={ this.handleChange }
          value={ storyline }
        />
      </label>
    );
  }

  renderGenderSelect() {
    const { gender } = this.state;
    return (
      <label htmlFor="gender-id" data-testid="genre-input-label">
        <select
          name="gender"
          id="gender-id"
          data-testid="genre-input"
          value={ gender }
          onChange={ this.handleChange }
        >
          Gênero
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <GenInput
          name="title"
          id="title-id"
          type="text"
          dtId="title-input"
          value={ title }
          onChange={ this.handleChange }
          labelId="title-input-label"
          labelName="Título"
        />
        <GenInput
          name="subtitle"
          id="subtitle-id"
          type="text"
          dtId="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
          labelId="subtitle-input-label"
          labelName="Subtítulo"
        />
        <GenInput
          name="imagePath"
          id="image-id"
          type="text"
          dtId="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
          labelId="image-input-label"
          labelName="Imagem"
        />
        {this.renderStoryline()}
        <GenInput
          name="rating"
          id="rating-id"
          type="number"
          dtId="rating-input"
          value={ rating }
          onChange={ this.handleChange }
          labelId="rating-input-label"
          labelName="Avaliação"
        />
        {this.renderGenderSelect()}
      </form>
    );
  }
}

// AddMovie.propTypes = ({
//   onClick: PropTypes.func.isRequired,
// });

export default AddMovie;
