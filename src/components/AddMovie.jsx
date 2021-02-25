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
            <textarea name="" value={storyline} data-testid="storyline-input" onChange={this.handleChange}></textarea>
          </div>
        </form>
      </fieldset>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func
};

export default AddMovie;
