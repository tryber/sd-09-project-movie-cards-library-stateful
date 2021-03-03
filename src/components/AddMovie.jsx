import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };

    // this.handleChange = this.handleChange.bind(this);

    // handleChange = ({ target }) => {
    //   const {name, value } = target;
    //   this.setState({
    //     [name]: value,
    //   });
    // };
  }

  render() {
    // const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Título
          <input
            type="text"
            name="title"
            // value={ title }
            data-testid="title-input"
            // onChange={ this.handleChange }
          />
        </label>

        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            // value={ subtitle }
            data-testid="subtitle-input"
            // onChange={ this.handleChange }
          />
        </label>

        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="subtitle"
            // value={ imagePath }
            data-testid="image-input"
            // onChange={ this.handleChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
