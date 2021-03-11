import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import RatingInput from './RatingInput';
import Storyline from './Storyline';
import Genre from './Genre';

export default class RenderStates extends Component {
  render() {
    const { title, callback, subtitle, imagePath, storyline, rating, genre } = this.props;
    return (
      <div>
        <Title title={ title } callback={ callback } />
        <Subtitle subtitle={ subtitle } callback={ callback } />
        <Image image={ imagePath } callback={ callback } />
        <Storyline storyline={ storyline } callback={ callback } />
        <RatingInput rating={ rating } callback={ callback } />
        <Genre genre={ genre } callback={ callback } />
      </div>
    );
  }
}

RenderStates.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};
