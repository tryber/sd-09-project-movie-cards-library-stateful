import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.inputTitle = this.inputTitle.bind(this);
    this.textContentInput = this.textContentInput.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  textContentInput(event) {
    this.setState({
      title: event.target.value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    const input = (
      <label data-testid="title-input-label" htmlFor="*">
        Título:
        <input
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ this.textContentInput }
        />
      </label>
    );
    return input;
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        { this.inputTitle() }
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
};

export default AddMovie;
