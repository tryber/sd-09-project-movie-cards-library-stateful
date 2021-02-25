import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    return (
      <div>
        <p>AddMovie</p>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              data-testid="title-input"
              title="title-input"
              type="text"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
