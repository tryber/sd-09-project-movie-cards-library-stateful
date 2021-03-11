import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';

export default class RenderStates extends Component {
  render() {
    const { title, callback, subtitle } = this.props;
    return (
      <div>
        <Title title={ title } callback={ callback } />
        <Subtitle subtitle={ subtitle } callback={ callback } />
      </div>
    );
  }
}

RenderStates.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};
