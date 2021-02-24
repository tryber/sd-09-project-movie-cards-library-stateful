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

    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);

    handleChange({ target });{
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    clear() {
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
    }

    titleInput() {
      const { title } = this.state;
      return (
        <label data-testid="title-input-label" htmlFor="titleInput">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleChange }
            id="titleInput"
          />
        </label>
      );
    }

    subtitleInput() {
      const { subtitle } = this.state;
      return (
        <label data-testid="subtitle-input-label" htmlFor="subtitleInput">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            id="subtitleInput"
          />
        </label>
      );
    }

    imageInput() {
      const { imagePath } = this.state;
      return (
        <label data-testid="image-input-label" htmlFor="imageInput">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            id="imageInput"
          />
        </label>
      );
    }

    storylineInput() {
      const { storyline } = this.state;
      return (
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            value={ storyline }
            onChange={ this.handleChange }
            id="storylineInput"
          />
        </label>
      );
    }

    ratingInput() {
      const { rating } = this.state;
      return (
        <label data-testid="rating-input-label" htmlFor="ratingInput">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            id="ratingInput"
          />
        </label>
      );
    }

    genreInput() {
      const { genre } = this.state;
      return (
        <label data-testid="genre-input-label" htmlFor="genreInput">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            value={ genre }
            onChange={ this.handleChange }
            id="genreInput"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      );
    }

    render() {
      return (
        <form data-testid="add-movie-form">
          {this.titleInput()}
          {this.subtitleInput()}
          {this.imageInput()}
          {this.storylineInput()}
          {this.ratingInput()}
          {this.genreInput()}
          <button
            data-testid="send-button"
            type="button"
            onClick={ this.clear }
          >
            Adicionar filme
          </button>
        </form>
      );
    }
  }
}

AddMovie.propTypes = ({
    onClick: PropTypes.func,
}).isRequired;

export default AddMovie;
