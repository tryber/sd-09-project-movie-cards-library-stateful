import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';
import AddImage from './AddImage';
import AddStoryline from './AddStoryline';
import AddRating from './AddRating';
import AddGenre from './AddGenre';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.buttonCliked = this.buttonCliked.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  buttonCliked() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <AddTitle
          title={ title }
          handleChange={ this.handleChange }
        />
        <AddSubtitle
          subtitle={ subtitle }
          handleChange={ this.handleChange }
        />
        <AddImage
          imagePath={ imagePath }
          handleChange={ this.handleChange }
        />
        <AddStoryline
          imagePath={ storyline }
          handleChange={ this.handleChange }
        />
        <AddRating
          imagePath={ rating }
          handleChange={ this.handleChange }
        />
        <AddGenre
          imagePath={ genre }
          handleChange={ this.handleChange }
        />
        <button
          data-testid="send-button"
          type="button"
          onClick={ this.buttonCliked }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
