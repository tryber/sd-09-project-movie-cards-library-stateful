import React from 'react';
import { func } from 'prop-types';
import TitleMovie from './TitleMovie';
import SubtileMovie from './SubtitleMovie';
import ImageMovie from './ImageMovie';
import StorylineMovie from './StorylineMovie';
import GenreSelect from './GenreSelect';
import RatingMovie from './RatingMovie';
import '../css/AddMovie.css';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(onClick) {
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
      <section className="container-add-movie">
        <div className="add-movie">
          <h3> Adicionar novo Filme</h3>
          <form data-testid="add-movie-form">
            <TitleMovie value={ title } handleChange={ this.handleChange } />
            <SubtileMovie value={ subtitle } handleChange={ this.handleChange } />
            <ImageMovie value={ imagePath } handleChange={ this.handleChange } />
            <StorylineMovie value={ storyline } handleChange={ this.handleChange } />
            <RatingMovie
              value={ Number(rating) }
              handleChange={ this.handleChange }
            />
            <GenreSelect value={ genre } handleChange={ this.handleChange } />
            <button
              type="button"
              className="button-add-movie"
              data-testid="send-button"
              onClick={ () => this.handleClick(onClick) }
            >
              Adicionar filme
            </button>
          </form>
        </div>
      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};

export default AddMovie;
