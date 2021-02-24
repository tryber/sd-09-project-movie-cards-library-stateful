import React, { Component } from "react";

class AddMovie extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "",
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick(event){
      event.preventDefault();
      Object.keys(this.state).forEach((state) => state === 'rating' ? this.setState({[state] : 0}) : this.setState({[state] : ''}));
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input
              name="title"
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="subtitle-input-label">
            Subtítulo
            <input
              name="subtitle"
              type="text"
              value={this.state.subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
            />
          </label>

          <label data-testid="image-input-label">
            Imagem
            <input
              name="imagePath"
              type="text"
              value={this.state.imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="storyline-input-label">
            Sinopse
            <textarea
              name="storyline"
              value={this.state.storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="rating-input-label">
            Avaliação
            <input
              name="rating"
              type="number"
              data-testid="rating-input"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </label>
          <label data-testid="genre-input-label">
            Gênero
            <select
              name="genre"
              value={this.state.genre}
              data-testid="genre-input"
              onChange={this.handleChange}
            >
              <option value="action" data-testid="genre-option">
                Ação
              </option>
              <option value="comedy" data-testid="genre-option">
                Comédia
              </option>
              <option value="thriller" data-testid="genre-option">
                Suspense
              </option>
            </select>
            <button data-testid="send-button" onClick={this.handleClick}>Adicionar filme</button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
