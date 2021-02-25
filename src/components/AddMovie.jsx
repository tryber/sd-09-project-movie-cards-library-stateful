import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <form id="add-movie-form">
        <label htmlFor="title-input-label">
          Titulo
          <input type="text" id="title-input-label" />
        </label>
      </form>
    );
  }
}

export default AddMovie;
