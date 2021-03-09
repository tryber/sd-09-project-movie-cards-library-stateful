import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

export default class RenderStates extends Component {
  render() {
    const { title, callback } = this.props;
    return (
      <div>
        <Title title={ title } callback={ callback } />
      </div>
    );
  }
}

RenderStates.propTypes = {
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
