// implement AddMovie component here
import React, { Component } from "react";
import PropTypes, { func } from "prop-types";
import { title } from "process";

class AddMovie extends Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, dataset } = event.target;
    let type = dataset.testid.split("-")[0];

    if (type === "image") type = "imagePath";

    this.setState({
      [type]: value
    });
  }

  saveMovie = (() => {
    this.props.onClick(this.state);
    
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action"
    });
  });

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <fieldset>
        <legend>Adicionar Filme</legend>
        <form data-testid="add-movie-form">
          <div>
            <label data-testid="title-input-label">Título</label>
            <input
              type="text"
              value={title}
              data-testid="title-input"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label data-testid="subtitle-input-label">Subtítulo</label>
            <input
              type="text"
              value={subtitle}
              data-testid="subtitle-input"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label data-testid="image-input-label">Imagem</label>
            <input
              type="text"
              value={imagePath}
              data-testid="image-input"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label data-testid="storyline-input-label">Sinopse</label>
            <textarea
              name=""
              value={storyline}
              data-testid="storyline-input"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div>
            <label data-testid="rating-input-label">Avaliação</label>
            <input
              type="number"
              value={rating}
              data-testid="rating-input"
              onChange={this.handleChange}
              step="0.1"
              min="0"
              max="5"
            />
          </div>
          <div>
            <label data-testid="genre-input-label">Gênero</label>
            <select
              value={genre}
              data-testid="genre-input"
              onChange={this.handleChange}
            >
              <option data-testid="genre-option" value="action">
                Ação
              </option>
              <option data-testid="genre-option" value="comedy">
                Comédia
              </option>
              <option data-testid="genre-option" value="thriller">
                Suspense
              </option>
            </select>
          </div>
          <div>
            <button data-testid="send-button" onClick={this.saveMovie}>Adicionar filme</button>
          </div>
        </form>
      </fieldset>
    );
  }
}

AddMovie.propTypes = {
  onClick: func
};

export default AddMovie;
