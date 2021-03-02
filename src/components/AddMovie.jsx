import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.inputTitle = this.inputTitle.bind(this);
    this.textContentInput = this.textContentInput.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImage = this.inputImage.bind(this);
    this.inputSinopse = this.inputSinopse.bind(this);
    this.inputRating = this.inputRating.bind(this);
    this.inputSelected = this.inputSelected.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  textContentInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    const input = (
      <label data-testid="title-input-label" htmlFor="*">
        Título:
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.textContentInput }
        />
      </label>
    );
    return input;
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    const input = (
      <label data-testid="subtitle-input-label" htmlFor="*">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.textContentInput }
        />
      </label>
    );
    return input;
  }

  inputImage() {
    const { imagePath } = this.state;
    const input = (
      <label data-testid="image-input-label" htmlFor="*">
        Imagem:
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.textContentInput }
        />
      </label>
    );
    return input;
  }

  inputSinopse() {
    const { storyline } = this.state;
    const textarea = (
      <label data-testid="storyline-input-label" htmlFor="*">
        Sinopse:
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          cols="30"
          rows="10"
          onChange={ this.textContentInput }
          placeholder="Digite aqui a sinopse do filme."
        />
      </label>
    );
    return textarea;
  }

  inputRating() {
    const { rating } = this.state;
    const input = (
      <label data-testid="rating-input-label" htmlFor="*">
        Avaliação:
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.textContentInput }
        />
      </label>
    );
    return input;
  }

  inputSelected() {
    const { genre } = this.state;
    const input = (
      <label data-testid="genre-input-label" htmlFor="*">
        Gênero:
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.textContentInput }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
    return input;
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle() }
        { this.inputSubtitle() }
        { this.inputImage() }
        { this.inputSinopse() }
        { this.inputRating() }
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   subtitle: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   genre: PropTypes.string.isRequired,
// };

export default AddMovie;
