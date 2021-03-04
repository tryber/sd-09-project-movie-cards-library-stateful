// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovieByState = this.addMovieByState.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  inputTile(title) {
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
          id="title-input-label"
          name="title"
        />
      </label>
    );
  }

  inputSubtitle(subtitle) {
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.handleChange }
          id="subtitle-input-label"
          name="subtitle"
        />
      </label>
    );
  }

  inputImage(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="image-input-label">
        Imagem
        <input
          type="text"
          value={ imagePath }
          data-testid="image-input"
          id="image-input-label"
          onChange={ this.handleChange }
          name="imagePath"
        />
      </label>
    );
  }

  textareaSynopsis(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
        Sinopse
        <textarea
          value={ storyline }
          id="storyline-input-label"
          name="storyline"
          data-testid="storyline-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputNumber(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input-label"
          value={ Number(rating) }
          name="rating"
          data-testid="rating-input"
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  selectGenere(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input-label">
        Gênero
        <select
          id="genre-input-label"
          data-testid="genre-input"
          onChange={ this.handleChange }
          name="genre"
          value={ genre }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  addMovieByState(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addButton() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ this.addMovieByState }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { imagePath, storyline, rating, genre, title, subtitle } = this.state;
    return (
      <div>
        <p>teste</p>
        <form data-testid="add-movie-form">
          {this.inputTile(title)}
          <br />
          {this.inputSubtitle(subtitle)}
          <br />
          {this.inputImage(imagePath)}
          <br />
          {this.textareaSynopsis(storyline)}
          <br />
          {this.inputNumber(rating)}
          <br />
          {this.selectGenere(genre)}
          <br />
          {this.addButton()}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
