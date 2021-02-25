// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
