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
    return <p>AddMovie</p>;
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func
};

export default AddMovie;
