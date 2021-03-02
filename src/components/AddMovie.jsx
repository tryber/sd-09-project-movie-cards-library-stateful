import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.inputTitle = this.inputTitle.bind(this);
    this.textContentInput = this.textContentInput.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  textContentInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  inputTitle() {
    const { title } = this.state;
    const input = (
      <label data-testid="title-input-label" htmlFor="*">
        Título:
        <input
          data-testid="title-input"
          name="title"
          type="text"
          value={ title }
          onChange={ this.textContentInput }
        />
      </label>
    );
    return input;
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    const input = (
      <label data-testid="subtitle-input-label" htmlFor="*">
        Subtítulo:
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
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
        { this.inputSubtitle() }
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   subtitle: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   imagePath: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   genre: PropTypes.string.isRequired,
// };

export default AddMovie;
