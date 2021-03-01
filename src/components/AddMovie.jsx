import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.createTitle = this.createTitle.bind(this);
    this.createSubtitle = this.createSubtitle.bind(this);
    this.createImage = this.createImage.bind(this);
    this.createStoryline = this.createStoryline.bind(this);
    this.createGenre = this.createGenre.bind(this);
    this.createButton = this.createButton.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeValue(event) {
    const { name, value } = event.target;
    if (name !== 'rating') this.setState({ [name]: value });
    else this.setState({ [name]: Number(value) });
  }

  createTitle() {
    const { title } = this.state;
    return (
      <div>
        <label
          htmlFor="input-title"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            id="input-title"
            data-testid="title-input"
            onChange={ this.changeValue }
            value={ title }
            name="title"
          />
        </label>
      </div>
    );
  }

  createSubtitle() {
    const { subtitle } = this.state;
    return (
      <div>
        <label
          htmlFor="input-subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            type="text"
            id="input-subtitle"
            data-testid="subtitle-input"
            onChange={ this.changeValue }
            value={ subtitle }
            name="subtitle"
          />
        </label>
      </div>
    );
  }

  createImage() {
    const { imagePath } = this.state;
    return (
      <div>
        <label
          htmlFor="input-image"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            id="input-image"
            data-testid="image-input"
            onChange={ this.changeValue }
            value={ imagePath }
            name="imagePath"
          />
        </label>
      </div>
    );
  }

  createStoryline() {
    const { storyline } = this.state;
    return (
      <div>
        <label htmlFor="textarea-sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textarea-sinopse"
            data-testid="storyline-input"
            cols="40"
            rows="5"
            onChange={ this.changeValue }
            value={ storyline }
            name="storyline"
          >
            {}
          </textarea>
        </label>
      </div>
    );
  }

  createRating() {
    const { rating } = this.state;
    return (
      <div>
        <label
          htmlFor="input-rating"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            id="input-rating"
            data-testid="rating-input"
            onChange={ this.changeValue }
            value={ rating }
            name="rating"
          />
        </label>
      </div>
    );
  }

  createGenre() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="input-select" data-testid="genre-input-label">
          Gênero
          <select
            id="input-select"
            data-testid="genre-input"
            onChange={ this.changeValue }
            value={ genre }
            name="genre"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  createButton() {
    const { onclick } = this.props;
    return (
      <div>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ onclick }
        >
          Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form" className="input-container">
          { this.createTitle() }
          { this.createSubtitle() }
          { this.createImage() }
          { this.createStoryline() }
          { this.createRating() }
          { this.createGenre() }
          { this.createButton() }
        </form>
      </div>
    );
  }
}

AddMovie.defaultProps = {
  onclick: () => {},
};

AddMovie.propTypes = {
  onclick: PropTypes.func,
};

export default AddMovie;
