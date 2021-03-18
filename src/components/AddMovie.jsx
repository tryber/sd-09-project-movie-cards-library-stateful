import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      storyline: '',
      subtitle: '',
      imagePath: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, storyline, subtitle, imagePath } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input">
            Título
            <input
              data-testid="title-input"
              htmlFor="title-input"
              value={ title }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="textarea">
            Sinopse
            <textarea
              data-testid="storyline-input"
              htmlFor="textarea"
              value={ storyline }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="subtitle-input-label" htmlFor="sb-input-label">
            Subtítulo
            <input
              data-testid="subtitle-input"
              htmlFor="sb-input-label"
              value={ subtitle }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="image-input-label" htmlFor="img-input-label">
            Imagem
            <input
              data-testid="image-input"
              htmlFor="img-input-label"
              value={ imagePath }
              type="text"
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}
