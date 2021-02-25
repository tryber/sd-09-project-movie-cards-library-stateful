import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            id="title"
            type="text"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleInputChange }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            id="subtitle"
            type="text"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ this.handleInputChange }
          />
        </label>

        <label data-testid="image-input-label" htmlFor="imagem">
          Imagem
          <input
            id="imagem"
            type="text"
            value={ imagePath }
            data-testid="image-input"
            onChange={ this.handleInputChange }
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="textarea">
          Sinopse
          <textarea
            id="textarea"
            value={ storyline }
            data-testid="storyline-input"
            onChange={ this.handleInputChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
