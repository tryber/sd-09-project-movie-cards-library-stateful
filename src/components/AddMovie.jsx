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
    this.createTextInput = this.createTextInput.bind(this);
  }

  handleInput(event) {
    const { target: { name, value } } = event;
    this.setState({ [name]: value });
  }

  createTextInput(label, name, testid, handler) {
    const { [name]: stateName } = this.state;
    return (
      <label htmlFor={ `${testid}-input` } data-testid={ `${testid}-input-label` }>
        { label }
        <input
          type="text"
          id={ `${testid}-input` }
          name={ name }
          value={ stateName }
          onChange={ handler }
          data-testid={ `${testid}-input` }
        />
      </label>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        { this.createTextInput('Título', 'title', 'title', this.handleInput) }
        { this.createTextInput('Subtítulo', 'subtitle', 'subtitle', this.handleInput) }
        { this.createTextInput('Imagem', 'imagePath', 'image', this.handleInput) }
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
