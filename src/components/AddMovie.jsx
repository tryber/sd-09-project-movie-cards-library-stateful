// implement AddMovie component here
import React, { Component } from "react";
import PropTypes, { func } from "prop-types";

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };
  }

  render() {
    return (
      <fieldset>
        <legend>Adicionar Filme</legend>
        <form data-testid="add-movie-form"></form>
      </fieldset>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func
};

export default AddMovie;
