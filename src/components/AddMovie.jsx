import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import NewRating from './NewRating';
import Genre from './Genre';
import Button from './Button';

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
    this.baseState = this.state;
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSend(onClick) {
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
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;

    return (
      <form id="add-movie-form" data-testid="add-movie-form">
        <TitleInput title={ title } onChange={ this.onChange } />
        <SubtitleInput subtitle={ subtitle } onChange={ this.onChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.onChange } />
        <Storyline storyline={ storyline } onChange={ this.onChange } />
        <NewRating rating={ rating } onChange={ this.onChange } />
        <Genre genre={ genre } onChange={ this.onChange } />
        <Button onClick={ () => this.onSend(onClick) } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
