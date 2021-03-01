// implement AddMovie component here
import React, { Component } from 'react';
import { func } from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.clickButton = this.clickButton.bind(this);
    this.inputTitle = this.inputTitle.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.inputImg = this.inputImg.bind(this);
    this.inputSinopse = this.inputSinopse.bind(this);
    this.inputAssessment = this.inputAssessment.bind(this);
    this.inputGenre = this.inputGenre.bind(this);
    this.buttonMovie = this.buttonMovie.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  clickButton() {
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

  inputTitle(fnCallBack) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputTitle">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  inputSubtitle(fnCallBack) {
    const { subtitle } = this.state;
    return (
      <label data-testid="subtitle-input-label" htmlFor="inputSubtitle">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  inputImg(fnCallBack) {
    const { imagePath } = this.state;
    return (
      <label data-testid="image-input-label" htmlFor="inputImg">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  inputSinopse(fnCallBack) {
    const { storyline } = this.state;
    return (
      <label data-testid="storyline-input-label" htmlFor="inputTextArea">
        Sinopse
        <textarea
          type="text"
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  inputAssessment(fnCallBack) {
    const { rating } = this.state;
    return (
      <label data-testid="rating-input-label" htmlFor="inputAssessment">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  inputGenre(fnCallBack) {
    const { genre } = this.state;
    return (
      <label data-testid="genre-input-label" htmlFor="inputGenre">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ fnCallBack }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  buttonMovie(fnCallBack) {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ fnCallBack }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle(this.handleChange) }
        { this.inputSubtitle(this.handleChange) }
        { this.inputImg(this.handleChange) }
        { this.inputSinopse(this.handleChange) }
        { this.inputAssessment(this.handleChange) }
        { this.inputGenre(this.handleChange) }
        { this.buttonMovie(this.clickButton) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
