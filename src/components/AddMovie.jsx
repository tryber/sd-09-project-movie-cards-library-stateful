import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './Tittle';
import Subtitle from './Subtitle';
import Image from './Image';
import StoryLine from './StoryLine';
import Stars from './Stars';
import Genere from './Genere';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genere: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genere } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } onClick={ onClick } />
        <Subtitle
          value={ subtitle }
          handleChange={ this.handleChange }
          onClick={ onClick }
        />
        <Image
          value={ imagePath }
          handleChange={ this.handleChange }
          onClick={ onClick }
        />
        <StoryLine
          value={ storyline }
          handleChange={ this.handleChange }
          onClick={ onClick }
        />
        <Stars value={ rating } handleChange={ this.handleChange } onClick={ onClick } />
        <Genere value={ genere } handleChange={ this.handleChange } onClick={ onClick } />
      </form>
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
