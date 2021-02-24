
// implement AddMovie component here
import React, { Component } from 'react';
import '../App.css';

class AddMovie extends Component {
  constructor() {
    super()

    this.Handler = this.Handler.bind(this);
    this.sendInfo = this.sendInfo.bind(this);

    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      genre: 'action'
}

  }

  Handler({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  sendInfo(event) {
    event.preventDefault();

    const { onClick } = this.props

    onClick(this.state)

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
  })
}

render() {
  return(
    <form action="" data-testid="add-movie-form" className='addMovie'>
      <label 
        htmlFor=""
        data-testid="title-input-label"
      >
      Título
      <input
        type="text" 
        name='title'
        value={this.state.title}
        data-testid="title-input"
        onChange={this.Handler}
      />
    </label>
    <label 
        htmlFor=""
        data-testid="title-input-label"
        >
        Subtítulo
      <input 
        type="text" 
        name='subtitle'
        value={this.state.subtitle}
        data-testid="subtitle-input"
        onChange={this.Handler}
        />
    </label>
    <label 
          htmlFor=""
          data-testid="title-input-label"
        >
        Image
        <input 
            type="text" 
            name='imagePath'
            value={this.state.imagePath}
            data-testid="image-input"
            onChange={this.Handler}
          />
          </label>
          <label 
            htmlFor=""
            data-testid="title-input-label"
          >
          Sipnosis
          <textarea 
            type="text" name='storyline'
            value={this.state.storyline}
            data-testid="storyline-input"
            onChange={this.Handler}
          />
      </label>
      <label 
            htmlFor=""
            data-testid="title-input-label"
          >
          Avaliaçao
          <input 
              type="number" 
              name='rating'
              value={this.state.rating}
              data-testid="number-input"
              onChange={this.Handler}
         />
      </label>
      <label  
          data-testid="select-input-label"
        >
        Genero
        <select 
            name='genre' 
            data-testid="select-input" 
            value={this.state.genre} 
            onChange={this.Handler}>
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value='action'>Ação</option>
          <option data-testid="select-option" value='comedy'>Comédia</option>
          <option data-testid="select-option" value='thriller'>Suspense</option>
        </select>
      </label>
      <button type="submit" onClick={this.sendInfo}>Adicionar filme</button>
    </form>
        )
    }
}

export default AddMovie