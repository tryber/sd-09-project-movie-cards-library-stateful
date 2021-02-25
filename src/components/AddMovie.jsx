import React, { Component } from 'react';

class AddMovie extends Component {
  render() {
    const onSearchTextChange = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="text-input">
          Título
          <input
            onChange={ onSearchTextChange }
            data-testid="title-input"
            title=""
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
