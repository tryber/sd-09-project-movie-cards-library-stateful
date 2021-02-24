import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleclick = this.handleclick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleclick({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  titulo(title) {
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.handleclick }
        />
      </label>
    );
  }

  subtitulo(subtitle) {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          type="text"
          value={ subtitle }
          onChange={ this.handleclick }
        />
      </label>
    );
  }

  imagem(imagePath) {
    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ imagePath }
          onChange={ this.handleclick }
        />
      </label>
    );
  }

  sinopse(storyline) {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ this.handleclick }
        />
      </label>
    );
  }

  avaliacao(rating) {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ rating }
          onChange={ this.handleclick }
        />
      </label>
    );
  }

  genero(genre) {
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ this.handleclick }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { subtitle, title, imagePath, storyline,
      rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {this.titulo(title)}
        {this.subtitulo(subtitle)}
        {this.imagem(imagePath)}
        {this.sinopse(storyline)}
        {this.avaliacao(rating)}
        {this.genero(genre)}
      </form>
    );
  }
}

export default AddMovie;
