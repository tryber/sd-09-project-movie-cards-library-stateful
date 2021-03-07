import React from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.subtitleChange = this.subtitleChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre:"",
    }
  }

  handleChange(event) {
      this.setState({
          storyLine: event.target.value,
      })
  }

  titleChange(event) {
    this.setState({
        title: event.target.value,
    })
}

  subtitleChange(event) {
    this.setState({
        subtitle: event.target.value,
    })
}

  imageChange(event) {
    this.setState({
        imagePath: event.target.value,
    })
}

  numberChange(event) {
    this.setState({
        number: event.target.value,
    })
}
  
  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <div>
        <form
          data-testid="add-movie-form"
        >
          <label
            data-testid="title-input-label"
          >
            Título
            <input
              type="text"
              value={ title }
              data-testid="title-input"
              onChange={ this.titleChange }
            />
          </label>
          <label
            data-testid="subtitle-input-label"
          >
            Subtítulo
            <input
              type="text"
              value={ this.state.subtitle }
              data-testid="subtitle-input"
              onChange={ this.subtitleChange }
            />
          </label>
          <label
            data-testid="image-input-label"
          >
            Imagem
            <input
              type="image"
              value={ imagePath }
              data-testid="image-input"
              onChange={ this.imageChange }
            />
          </label>
          <label
            data-testid="storyline-input-label"
          >
            Sinopse
            <textarea
              value={ storyLine }
              data-testid="storyline-input"
              onChange={ this.handleChange }
            />
          </label>
          <label
            data-testid="rating-input-label"
          >
            Avaliação
            <input
              type="number"
              value={ this.state.rating }
              data-testid="rating-input"
              onChange={ this.numberChange }
            />
          </label>
          <label data-testid="genre-input-label">
              Gênero:
              <select
                name="age"
                defaultValue={ this.state.genre }
                data-testid="genre-input"
                onChange={ this.handleChange }
              >
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
              </select>
            </label>
            <button data-testid="send-button"
            onClick={ }


        </form>
      </div>
    );
  }
}
  
export default AddMovie;