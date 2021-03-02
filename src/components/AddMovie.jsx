// implement AddMovie component here
import React from 'react';
import GenericAddMovie from './genericAddMovie';
import GenericAddMovie2 from './genericAddMovie2';
import GenericAddMovie3 from './genericAddmovie3';

class AddMovie extends React.Component {
  constructor(prop) {
    super(prop);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <GenericAddMovie3
            title={ title }
            subtitle={ subtitle }
            handleChange={ this.handleChange }
          />
          <GenericAddMovie
            rating={ rating }
            storyline={ storyline }
            handleChange={ this.handleChange }
            genre={ genre }
          />
          <GenericAddMovie2
            handleChange={ this.handleChange }
            rating={ rating }
            imagePath={ imagePath }
          />
        </form>
      </div>
    );
  }
}

export default AddMovie;
