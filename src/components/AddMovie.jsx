// implement AddMovie component here
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Genre from './structure/Genre';
import ImagePath from './structure/ImagePath';
import Rating from './structure/Rating';
import StoryLine from './structure/StoryLine';
import Subtitle from './structure/Subtitle';
import Title from './structure/Title';

function AddMovie({ addMovie }) {
  const [teste, setTeste] = useState({
    subtitle: '',
    title: '',
    imagePath: '',
    storyLine: '',
    rating: 0,
    genre: 'action',
  });

  const handleClick = ({ target }) => {
    const { name, value } = target.value;
    setTeste({
      [name]: value,
    });
  };

  const buttonHandler = () => {

    addMovie = addMovie(teste);
    setTeste({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  };

  return (
    <div>
      <form data-testid="add-movie-form">
        <Title value={ teste.title } onChange={ handleClick } />
        <Subtitle value={ teste.subtitle } onChange={ handleClick } />
        <ImagePath value={ teste.imagePath } onChange={ handleClick } />
        <StoryLine value={ teste.storyLine } onChange={ handleClick } />
        <Rating value={ teste.rating } onChange={ handleClick } />
        <Genre value={ teste.genre } onChange={ handleClick } />
        <button data-testid="send-button" type="button" onClick={ buttonHandler }>
          Adicionar filme
        </button>
      </form>
    </div>
  );
}

export default AddMovie;
