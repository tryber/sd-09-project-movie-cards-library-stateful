// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label
            htmlFor="titulo"
            data-testid="title-input-label"
          >
            Título
            <input
              name="title"
              type="text"
              id="titulo"
              onChange={ this.handleChange }
              value={ title }
              data-testid="title-input"
            />
          </label>

          <label htmlFor="subtitulo"
            data-testid="subtitle-input-label"
          >
            Subtítulo
            <input
              name="subtitle"
              type="text"
              id="subtitulo"
              onChange={this.handleChange}
              value={this.state.subtitle}
              data-testid="subtitle-input"
            />
          </label>

          <label
            htmlFor="img"
            data-testid="image-input-label"
          >
            Imagem
            <input
              name="imagePath"
              type="text"
              id="img"
              onChange={this.handleChange}
              value={this.state.imagePath}
              data-testid="image-input"
            />
          </label>


          <label
            htmlFor="Sinopse"
            data-testid="storyline-input-label"
          >
            Sinopse
            <textarea
              name="storyline"
              id="Sinopse"
              onChange={this.handleChange}
              value={this.state.storyline}
              data-testid="storyline-input"/>
          </label>

          <label
            htmlFor="avaliaçao"
            data-testid="rating-input-label"
          >
            Avaliação
            <input
              name="rating"
              type="number"
              id="avaliação"
              onChange={this.handleChange}
              value={this.state.rating}
              data-testid="rating-input"
           />
          </label>

          <label
            htmlFor="gen"
            data-testid="genre-input-label"
          >
            Gênero
              <select name="genre" id="gen" onChange={this.handleChange} data-testid="genre-input">
                <option data-testid="genre-option" value="action">Ação</option>
                <option data-testid="genre-option" value="comedy">Comédia</option>
                <option data-testid="genre-option" value="thriller">Suspense</option>
             </select>
          </label>

         <button data-testid="send-button" onClick={onClick}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
