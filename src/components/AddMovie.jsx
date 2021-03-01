import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = ({
      title: '',
    });
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          <input
            id="titulo"
            type="text"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
