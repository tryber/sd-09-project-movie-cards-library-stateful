import React from 'react';
import PropTypes from 'prop-types';
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
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderGenreSelect = this.renderGenreSelect.bind(this);
    this.createNewCard = this.createNewCard.bind(this);
    this.renderStoryline = this.renderStoryline.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.sendStateToParent = this.sendStateToParent.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  createNewCard() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  sendStateToParent(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.createNewCard();
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

  renderButton() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.sendStateToParent }
      >
        Adicionar filme
      </button>
    );
  }

  renderGenreSelect() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-id" data-testid="genre-input-label">
        <select
          name="genre"
          id="genre-id"
          data-testid="genre-input"
          value={ genre }
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
    const { subtitle, title, imagePath, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <GenInput
          name="title"
          type="text"
          dtId="title-input"
          value={ title }
          onChange={ this.handleChange }
          labelId="title-input-label"
          labelName="Título"
        />
        <GenInput
          name="subtitle"
          type="text"
          dtId="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
          labelId="subtitle-input-label"
          labelName="Subtítulo"
        />
        <GenInput
          name="imagePath"
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
          type="number"
          dtId="rating-input"
          value={ rating }
          onChange={ this.handleChange }
          labelId="rating-input-label"
          labelName="Avaliação"
        />
        {this.renderGenreSelect()}
        {this.renderButton()}
      </form>
    );
  }
}

AddMovie.propTypes = ({
  onClick: PropTypes.func.isRequired,
});

export default AddMovie;
