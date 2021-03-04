// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }

  render() {
    const { onClick } = this.props;

    const handleChange = (event) => {
      this.setState({
        [event.target.id]: event.target.value,
      })
    }
    return(
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" for="title">
          Título
          <input
            type="text"
            value={ this.state.title }
            data-testid="title-input"
            id="title"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="subtitle-input-label" for="subtitle">
          Subtítulo
          <input
            type="text"
            value={ this.state.subtitle }
            data-testid="subtitle-input"
            id="subtitle"
            onChange={ handleChange }
          />
        </label>
        <label data-testid="image-input-label" for="">
          Imagem
          <input
            type="text"
            value={ this.state.imagePath }
            data-testid="image-input"
            id="imagePath"
            onChange={ handleChange }
          />
        </label>
      </form>
    )
  }
}

export default AddMovie;