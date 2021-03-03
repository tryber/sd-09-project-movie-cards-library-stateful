import React from 'react';

import AddCompTitle from './AddCompTitle';
import AddCompSubtitle from './AddCompSubtitle';
import AddCompImage from './AddCompImage';
import AddCompStoryline from './AddCompStoryline';
import AddCompRating from './AddCompRating';
import AddCompGenre from './AddCompGenre';

class AddMovie extends React.Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;

    if (name === 'rating') {
      return this.setState({ [name]: Number(value) });
    }

    this.setState({
      [name]: value });
  }

  render() {
    const { handleChange } = this;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <AddCompTitle title={ title } handleChange={ handleChange } />
        <AddCompSubtitle subtitle={ subtitle } handleChange={ handleChange } />
        <AddCompImage imagePath={ imagePath } handleChange={ handleChange } />
        <AddCompStoryline storyline={ storyline } handleChange={ handleChange } />
        <AddCompRating rating={ rating } handleChange={ handleChange } />
        <AddCompGenre genre={ genre } handleChange={ handleChange } />
        <button type="submit" onClick={ () => {} }>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
