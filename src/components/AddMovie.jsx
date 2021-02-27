import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleInput = this.handleInput.bind(this);
    this.createInput = this.createInput.bind(this);
  }

  handleInput(event) {
    const { target: { name, value } } = event;
    console.log(`name = ${name}, value = ${value}`);
    this.setState({ [name]: value });
  }

  createInput(type, label, name, handler) {
    const { [name]: stateName } = this.state;
    return (
      <label htmlFor={ `${name}-input` } data-testid={ `${name}-input-label` }>
        { label }
        <input
          type={ type }
          id={ `${name}-input` }
          name={ name }
          value={ stateName }
          onChange={ handler }
          data-testid={ `${name}-input` }
        />
      </label>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        { this.createInput('text', 'Título', 'title', this.handleInput) }
        { this.createInput('text', 'Subtítulo', 'subtitle', this.handleInput) }
        {/* <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ this.state.title }
            onChange={ <AddMovie /> }
            data-testid="title-input"
            id="title-input"
          />
        </label> */}
      </form>
    );
  }
}

export default AddMovie;
