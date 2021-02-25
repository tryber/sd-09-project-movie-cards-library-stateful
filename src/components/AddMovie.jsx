// implement AddMovie component here
import React from 'react';

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

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleClick(e) {
    return console.log(e);
  }

  handleOnChange({ target }) {
    this.setState({ title: target.value });
  }

  render() {
    return (
      <form data-testid="add-movie-form" onClick={this.handleClick}>
        <label
          data-testid="title-input-label"
          title={ this.state.title }
        >
          Título
          <input
            data-testid="title-input"
            onChange={ this.handleOnChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
