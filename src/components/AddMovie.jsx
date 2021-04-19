import React from 'react';
import PropTypes from 'prop-types';

import LabelGenre from './forms/LabelGenre';
import LabelImage from './forms/LabelImage';
import LabelRating from './forms/LabelRating';
import LabelSinopse from './forms/LabelSinopse';
import LabelSubtitle from './forms/LabelSubtitle';
import LabelTitle from './forms/LabelTitle';
import ButtonSend from './forms/ButtonSend';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };

    const { title, subtitle, imagePath, storyLine, rating, genre, onClick } = this.props;
    this.state = { title, subtitle, imagePath, storyLine, rating, genre, onClick };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target: { id, value } } = event;
    // console.log(event.target);
    switch (id) {
    case 'image':
      this.setState({ imagePath: value });
      break;
    case 'send':
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyLine: '',
        rating: 0,
        genre: 'action',
      });
      break;
    case 'rating':
      this.setState({ rating: event.target.value });
      console.log(event.target);
      break;
    default:
      this.setState({ [id]: value });
      break;
    }
  }

  render() {
    const {
      title,
      subtitle,
      imagePath: image,
      storyLine,
      rating,
      genre,
      onClick,
    } = this.state;

    return (
      <form data-testid="add-movie-form" action="" method="get">
        <LabelTitle title={ title } handleChange={ this.handleChange } />
        <LabelSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <LabelImage image={ image } handleChange={ this.handleChange } />
        <LabelSinopse storyLine={ storyLine } handleChange={ this.handleChange } />
        <LabelRating rating={ rating } handleChange={ this.handleChange } />
        <LabelGenre genre={ genre } handleChange={ this.handleChange } />
        <ButtonSend handleChange={ this.handleChange } onClick={ onClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyLine: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyLine: '',
  rating: 0,
  genre: 'action',
  onClick: () => { console.log('alert'); },
};

export default AddMovie;
