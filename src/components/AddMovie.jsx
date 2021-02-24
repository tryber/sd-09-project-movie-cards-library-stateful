/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onClickBtn = this.onClickBtn.bind(this);
    this.inputText = this.inputText.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImage = this.inputImage.bind(this);
    this.inputTextArea = this.inputTextArea.bind(this);
    this.inputNumber = this.inputNumber.bind(this);
    this.selectForm = this.selectForm.bind(this);
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
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClickBtn(event) {
    event.preventDefault();
    const { genre, imagePath, rating, storyline, subtitle, title } = this.state;
    const { onClick } = this.props;
    const newMovie = { genre,
      imagePath,
      rating,
      storyline,
      subtitle,
      title,
    };
    this.setState({ subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputText(callback) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ callback }
          data-testid="title-input"
          id="title-input"
        />
      </label>
    );
  }

  inputSubtitle(callback) {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="sub-input">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ callback }
          data-testid="subtitle-input"
          id="sub-input"
        />
      </label>
    );
  }

  inputImage(callback) {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="img-input">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ callback }
          data-testid="image-input"
          id="img-input"
        />
      </label>
    );
  }

  inputTextArea(callback) {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="stry-input">
        Sinopse
        <textarea
          type="text"
          name="storyline"
          value={ storyline }
          onChange={ callback }
          data-testid="storyline-input"
          id="stry-input"
        />
      </label>
    );
  }

  inputNumber(callback) {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="rat-input">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ callback }
          data-testid="rating-input"
          id="rat-input"
        />
      </label>
    );
  }

  selectForm(callback) {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="g-input">
        Gênero
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ callback }
          id="g-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form" onSubmit={ this.onClickBtn }>
        { this.inputText(this.handleChange) }
        { this.inputSubtitle(this.handleChange) }
        { this.inputImage(this.handleChange) }
        { this.inputTextArea(this.handleChange) }
        { this.inputNumber(this.handleChange) }
        { this.selectForm(this.handleChange) }
        <button
          data-testid="send-button"
          type="submit"
          onClick={ this.onClickBtn }
        >
          Adicionar Filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
