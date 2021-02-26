import React from 'react';
import PropTypes from 'prop-types';

export default class AddMovies extends React.Component {
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
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  titleRender = () => {
    const { title } = this.state;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  };

  subtitleRender = () => {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  };

  imageRender = () => {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  };

  storylineRender = () => {
    const { storyline } = this.state;
    return (
      <label
        htmlFor="text"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  };

  ratingRender = () => {
    const { rating } = this.state;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  };

  genreRender = () => {
    const { genre } = this.state;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option
            title="action"
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>
          <option
            title="comedy"
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            title="thriller"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  };

  render() {
    return (
      <section>
        <form data-testid="add-movie-form">
          { this.titleRender() }
          { this.subtitleRender() }
          { this.imageRender() }
          { this.storylineRender() }
          { this.ratingRender() }
          { this.genreRender() }
          <div>
            <button
              id="button"
              type="button"
              data-testid="send-button"
              onClick={ this.handleOnClick }
            >
              Adicionar filme
            </button>
          </div>
        </form>
      </section>
    );
  }
}

AddMovies.propTypes = {
  onClick: PropTypes.func.isRequired,
};
