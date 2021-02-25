import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImagePath from './ImagePath';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath } = this.state;
    return (
      <form id="add-movie-form" data-testid="add-movie-form">
        <TitleInput title={ title } onChange={ this.onChange } />
        <SubtitleInput subtitle={ subtitle } onChange={ this.onChange } />
        <ImagePath imagePath={ imagePath } onChange={ this.onChange } />
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
