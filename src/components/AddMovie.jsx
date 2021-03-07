// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import Title from './AddMovieParts/Title';
import Subtitle from './AddMovieParts/Subtitle';
import Image from './AddMovieParts/Image';
import Storyline from './AddMovieParts/Storyline';
import Rating from './AddMovieParts/Rating';

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
      this.setState({ [event.target.id]: event.target.value });
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
        <Title handleChange={ handleChange } title={ title } />
        <Subtitle handleChange={ handleChange } subtitle={ subtitle } />
        <Image handleChange={ handleChange } imagePath={ imagePath } />
        <Storyline handleChange={ handleChange } storyline={ storyline } />
        <Rating handleChange={ handleChange } rating={ rating } />
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
