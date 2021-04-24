// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
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

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="Título" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name=""
            value= { this.state.title }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="Subtítulo" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name=""
            value= { this.state.subtitle }
            onChange= { this.handleChange }
          />
        </label>

        <label htmlFor="Imagem" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name=""
            value= { this.state.imagePath }
            onChange= { this.handleChange }
          />
        </label>

         <label htmlFor="Sinopse" data-testid="storyline-input-label">
          Sinopse
          <textarea
            data-testid="storyline-input"
            type="text"
            name=""
            value= { this.state.imagePath }
            onChange= { this.handleChange }
          />
        </label>

        <label htmlFor="Avaliação" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name=""
            value= { this.state.rating }
            onChange= { this.handleChange }
          />
        </label>

        <label htmlFor="Gênero" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            name=""
            value= { this.state.genre }
            onChange= { this.handleChange }
          >

          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>

        </label>
      </form>

    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
}

export default AddMovie;
