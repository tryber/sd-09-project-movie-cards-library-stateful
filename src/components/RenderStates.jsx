import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import RatingInput from './RatingInput';

export default class RenderStates extends Component {
  render() {
    const { title, callback, subtitle, imagePath, rating } = this.props;
    return (
      <div>
        <Title title={ title } callback={ callback } />
        <Subtitle subtitle={ subtitle } callback={ callback } />
        <Image image={ imagePath } callback={ callback } />
        <RatingInput rating={ rating } callback={ callback } />
      </div>
    );
  }
}

RenderStates.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
