import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Tittle';
import Subtitle from './Subtitle';
import Image from './Image';
import StoryLine from './StoryLine';
import Stars from './Stars';
import Genere from './Genere';
import AddMovieButton from './AddMovieButton';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.addMovieButton = this.addMovieButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  get initialState() {
    return {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genere: 'action',
    };
  }

  addMovieButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genere } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title value={ title } handleChange={ this.handleChange } />
          <Subtitle
            value={ subtitle }
            handleChange={ this.handleChange }
          />
          <Image
            value={ imagePath }
            handleChange={ this.handleChange }
          />
          <StoryLine
            value={ storyline }
            handleChange={ this.handleChange }
          />
          <Stars value={ rating } handleChange={ this.handleChange } />
          <Genere value={ genere } handleChange={ this.handleChange } />
        </form>
        <AddMovieButton onClick={ this.addMovieButton } />
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => 'xablau',
};

export default AddMovie;
