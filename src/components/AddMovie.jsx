import React from 'react';
import PropTypes from 'prop-types';

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

    this.setTitle = this.setTitle.bind(this);
    this.setSubTitle = this.setSubTitle.bind(this);
    this.setImagePath = this.setImagePath.bind(this);
    this.setStoryLine = this.setStoryLine.bind(this);
    this.setRating = this.setRating.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setGenre = this.setGenre.bind(this);
    this.handlerOnClick = this.handlerOnClick.bind(this);
  }

  handlerOnClick(state) {
    const { onClick } = this.props;
    onClick(state);
  }

  setTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  setSubTitle(event) {
    this.setState({
      subtitle: event.target.value,
    });
  }

  setImagePath(event) {
    this.setState({
      imagePath: event.target.value,
    });
  }

  setStoryLine(event) {
    this.setState({
      storyline: event.target.value,
    });
  }

  setRating(event) {
    this.setState({
      rating: event.target.value,
    });
  }

  setGenre(event) {
    this.setState({
      genre: event.target.value,
    });
  }

  renderTitle(title) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="title"
          data-testid="title-input"
          value={ title }
          onChange={ this.setTitle }
        />
      </label>
    );
  }

  renderSubTitle(subtitle) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.setSubTitle }
        />
      </label>
    );
  }

  renderImage(imagePath) {
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="image"
          id="image"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.setImagePath }
        />
      </label>
    );
  }

  renderStoryLine(storyline) {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          name="storyline"
          id="storyline"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.setStoryLine }
        />
      </label>
    );
  }

  renderRating(rating) {
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.setRating }
        />
      </label>
    );
  }

  renderGenre(genre) {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.setGenre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.renderTitle(title)}
        {this.renderSubTitle(subtitle)}
        {this.renderImage(imagePath)}
        {this.renderStoryLine(storyline)}
        {this.renderRating(rating)}
        {this.renderGenre(genre)}
        <button
          type="button"
          data-testid="send-button"
          onClick={ () => this.handlerOnClick(this.state) }
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
