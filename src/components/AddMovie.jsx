import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import RenderStates from './RenderStates';

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <RenderStates
          title={ title }
          callback={ this.handleChange }
          subtitle={ subtitle }
        />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
