import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.titleChange = this.titleChange.bind(this);
    this.subtitleChange = this.subtitleChange.bind(this);

    this.state = ({
      title: '',
      subtitle: '',
    });
  }

  titleChange(event) {
    this.setState({ title: event.target.value });
  }

  subtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="titulo">
          Título
          <input
            id="titulo"
            type="text"
            value={ title }
            onChange={ this.titleChange }
            data-testid="title-input"
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitulo">
          Subtítulo
          <input
            id="subtitulo"
            type="text"
            value={ subtitle }
            onChange={ this.subtitleChange }
            data-testid="subtitle-input"
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
