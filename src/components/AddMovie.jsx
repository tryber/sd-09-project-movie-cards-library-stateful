import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
        subtitle: "",
        title: "",
        imagePath: "",
        storyline: "",
        rating: 0,
        genre: "action", 
      }
  }
  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form" />
    )
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
