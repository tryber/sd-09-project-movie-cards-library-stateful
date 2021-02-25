// implement AddMovie component here

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ImagePath from './ImagePath';
import InputRating from './InputRating';
import InputGenre from './InputGenre';
import Storyline from './Storyline';
import Subtitle from './Subtitle';
import Title from './Title';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    const { name } = target;
    // const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  resetForm() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        <Subtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <ImagePath imagePath={ imagePath } handleChange={ this.handleChange } />
        <Storyline storyline={ storyline } handleChange={ this.handleChange } />
        <InputRating rating={ rating } handleChange={ this.handleChange } />
        <InputGenre genre={ genre } handleChange={ this.handleChange } />
        <Button onClick={ this.resetForm } />
      </form>
    );
  }
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
