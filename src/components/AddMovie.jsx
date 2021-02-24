import React, { Component } from 'react';
import { func } from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.inputText = this.inputText.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  inputText(fnCallBack) {
    const { title } = this.state;
    return (
      <label data-testid="title-input-label" htmlFor="inputText">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ title }
          onChange={ fnCallBack }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        { this.inputText(this.handleChange)}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};

export default AddMovie;
