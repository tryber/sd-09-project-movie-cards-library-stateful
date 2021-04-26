// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  title: "",
  subtitle: "",
  imagePath: "",
  storyline: "",
  rating: 0,
  genre: "action",
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = ({ target }) => {
    this.setState({
      title: target.value,
      subtitle: target.value,
      imagePath: target.value,
      storyline: target.value,
      rating: target.value,
      genre: target.value,
    })
  }

  handleOnClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(initialState);
  }

  titulo = (title) => {
    return (
      <label htmlFor="Título" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name=""
            value= { title }
            onChange={ this.handleChange }
          />
        </label>
    )
  }

  subtitulo = (subtitle) => {
    return (
      <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name=""
            value= { subtitle }
            onChange= { this.handleChange }
          />
        </label>
    )
  }

  imagePath = (imagePath) => {
    return (
      <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name=""
            value= { imagePath }
            onChange= { this.handleChange }
          />
        </label>
    )
  }

  sinopse = (storyline) => {
    return (
      <label htmlFor="Sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name=""
            value= { storyline }
            onChange= { this.handleChange }
          />
        </label>
    )
  }

  avaliacao = (rating) => {
    return (
      <label htmlFor="Avaliação" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name=""
            value= { rating }
            onChange= { this.handleChange }
          />
        </label>
    )
  }

  genero = (genre) => {
    return (
      <label htmlFor="Gênero" data-testid="genre-input-label">
      Gênero
      <select
        data-testid="genre-input"
        name=""
        value= { genre }
        onChange= { this.handleChange }
      >

      <option data-testid="genre-option" value="action">Ação</option>
      <option data-testid="genre-option" value="comedy">Comédia</option>
      <option data-testid="genre-option" value="thriller">Suspense</option>
      </select>
    </label>
    )
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.titulo(this.state.title) }
        
        { this.subtitulo(this.state.subtitle) }

        { this.imagePath(this.state.imagePath) }

        { this.sinopse(this.state.storyline) }

        { this.avaliacao(this.state.rating) }

        { this.genero(this.state.genre) }

        <button data-testid="send-button" onClick={ this.handleOnClick }>
            Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}

export default AddMovie;
