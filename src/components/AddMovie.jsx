// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import Title from './AddMovieParts/Title';
// import Subtitle from './AddMovieParts/Subtitle';
// import Image from './AddMovieParts/Image';
// import Storyline from './AddMovieParts/Storyline';
// import Rating from './AddMovieParts/Rating';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    const handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      });
      console.log(event.target.value);
    };

    const sendForm = () => {
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
      });
      onClick();
    };

    return (
      <form data-testid="add-movie-form">
        <Title handleChange={ handleChange } title={ title }/>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            id="subtitle"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text"
            value={ imagePath }
            data-testid="image-input"
            id="imagePath"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            value={ storyline }
            data-testid="storyline-input"
            id="storyline"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            value={ rating }
            data-testid="rating-input"
            id="rating"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            value={ genre }
            data-testid="genre-input"
            id="genre"
            onChange={ handleChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="send-button"
          onClick={ sendForm }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
