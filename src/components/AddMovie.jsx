import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({[name]: value})
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            data-testid="title-input"
            id="title-input"
            type="text"
            name="title"
            value={title}
            onChange={this.changeHandler}
          />
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            id="subtitle-input"
            type="text"
            name="subtitle"
            value={subtitle}
            onChange={this.changeHandler}
          />
        </label>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            id="image-input"
            type="text"
            name="imagePath"
            value={imagePath}
            onChange={this.changeHandler}
          />
        </label>
        <label data-testid="storyline-input-label" htmlFor="story-input">
          Sinopse
          <textarea
            data-testid="storyline-input"
            name="storyline"
            id="story-input"
            cols="30"
            rows="10"
            value={storyline}
            onChange={this.changeHandler}
          >
          </textarea>
        </label>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating"
            id="rating-input"
            value={rating}
            onChange={this.changeHandler}
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre-select">
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            id="genre-select"
            value={genre}
            onChange={this.changeHandler}
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <button
          data-testid="send-button"
          onClick={this.props.onClick}
        >
          Adicionar filme
        </button>
      </form>
    );
  }

}

export default AddMovie;
