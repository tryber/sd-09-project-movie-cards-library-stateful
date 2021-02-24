import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  title(titulo, change) {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="title"
          value={ titulo }
          data-testid="title-input"
          onChange={ change }
        />
      </label>
    );
  }

  subtitle(subtitle, change) {
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtitulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ change }
        />
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <div>
        <form action="" data-testid="add-movie-form">
          {this.title(title, this.handleChange)}
          {this.subtitle(subtitle, this.handleChange)}
        </form>

      </div>
    );
  }
}
AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
