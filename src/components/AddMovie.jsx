// implement AddMovie component here
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Genre from './structure/Genre';
import ImagePath from './structure/ImagePath';
import Rating from './structure/Rating';
import StoryLine from './structure/StoryLine';
import Subtitle from './structure/Subtitle';
import Title from './structure/Title';

function AddMovie(props) {
  const [inputed, setInputed] = useState({
    subtitle: '',
    title: '',
    imagePath: '',
    storyLine: '',
    rating: 0,
    genre: 'action',
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setInputed({
      ...inputed,
      [name]: value,
    });
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    const { onClick } = props;
    onClick(inputed);
    setInputed({
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
        <Title value={ inputed.title } onChange={ handleClick } />
        <Subtitle value={ inputed.subtitle } onChange={ handleClick } />
        <ImagePath value={ inputed.imagePath } onChange={ handleClick } />
        <StoryLine value={ inputed.storyLine } onChange={ handleClick } />
        <Rating value={ inputed.rating } onChange={ handleClick } />
        <Genre value={ inputed.genre } onChange={ handleClick } />
        <button data-testid="send-button" type="button" onClick={ buttonHandler }>
          Adicionar filme
        </button>
      </form>
    </div>
  );
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
