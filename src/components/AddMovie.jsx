import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeContent = this.changeContent.bind(this);
    this.inputTitle = this.inputTitle.bind(this);
    this.inputSutitle = this.inputSutitle.bind(this);
    this.inputImagem = this.inputImagem.bind(this);
    this.textarea = this.textarea.bind(this);
    this.inputNumber = this.inputNumber.bind(this);
    this.inputGenre = this.inputGenre.bind(this);
    this.bntForm = this.bntForm.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changeContent({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  submit() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputTitle">
        Título:
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ this.changeContent }
        />
      </label>
    );
  }

  inputSutitle() {
    const { subtitle } = this.state;

    return (
      <label data-testid="subtitle-input-label" htmlFor="inputSutitle">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ this.changeContent }
        />
      </label>
    );
  }

  inputImagem() {
    const { imagePath } = this.state;

    return (
      <label data-testid="image-input-label" htmlFor="inputImagem">
        Imagem:
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          data-testid="image-input"
          onChange={ this.changeContent }
        />
      </label>
    );
  }

  textarea() {
    const { storyline } = this.state;

    return (
      <label data-testid="storyline-input-label" htmlFor="textarea">
        Sinopse:
        <input
          type="text"
          name="storyline"
          value={ storyline }
          data-testid="storyline-input"
          onChange={ this.changeContent }
        />
      </label>
    );
  }

  inputNumber() {
    const { rating } = this.state;

    return (
      <label data-testid="rating-input-label" htmlFor="inputNumber">
        Avaliação:
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.changeContent }
        />
      </label>
    );
  }

  inputGenre() {
    const { genre } = this.state;

    return (
      <label data-testid="genre-input-label" htmlFor="inputGenre">
        Gênero:
        <select
          name="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ this.changeContent }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  bntForm() {
    return (
      <button
        type="submit"
        data-testid="send-button"
        onClick={ this.submit }
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle() }
        { this.inputSutitle() }
        { this.inputImagem() }
        { this.textarea() }
        { this.inputNumber() }
        { this.inputGenre() }
        { this.bntForm() }
      </form>
    );
  }
}

export default AddMovie;
