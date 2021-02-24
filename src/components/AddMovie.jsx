// implement AddMovie component here
import React, { Component } from 'react';
import { addMovieFirstState as firstState } from '../extraData';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = firstState;
    this.changeValues = this.changeValues.bind(this);
  }

  changeValues(event) {
    const { name, value } = event.target;
    return this.setState({ [name]: value });
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="addMovieTitle">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ this.state.title }
            onChange={ this.changeValues }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
