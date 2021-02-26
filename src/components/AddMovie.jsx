// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import Genre from './structure/Genre';
import ImagePath from './structure/ImagePath';
import Rating from './structure/Rating';
import StoryLine from './structure/StoryLine';
import Subtitle from './structure/Subtitle';
import Title from './structure/Title';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }
  // href https://stackoverflow.com/questions/55188257/const-name-value-event-target-what-does-this-mean/55188322

  handleClick(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // href: https://pt-br.reactjs.org/docs/handling-events.html
  buttonHandler(e) {
    e.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Title title={ title } handleClick={ this.handleClick } />
          <Subtitle subtitle={ subtitle } handleClick={ this.handleClick } />
          <ImagePath imagePath={ imagePath } handleClick={ this.handleClick } />
          <StoryLine storyLine={ storyLine } handleClick={ this.handleClick } />
          <Rating rating={ rating } handleClick={ this.handleClick } />
          <Genre genre={ genre } handleClick={ this.handleClick } />
          <button data-testid="send-button" type="button" onClick={ this.buttonHandler }>
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
