// implement AddMovie component here

import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
constructor() {
  super();
  
  this.state = {
    title: '',
    subtitle: '',
    imagePath: '',
    storyline: '',
    rating: 0,
    genre: 'action',    
  };
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value,
  });   
}
  render() {
    const {
      title,
      subtitle,
      imagePath,
    } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input
              type="text"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
              name="title"
            />
          </label>

          <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={ subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
              name="subtitle"
            />
          </label>
          <label data-testid="image-input-label" htmlFor="image-input-label">
            Imagem
            <input
              type="text"
              value={ imagePath }
              onChange={ this.handleChange }
              data-testid="image-input"
              name="imagePath"
            />

          </label>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;