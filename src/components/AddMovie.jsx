import React, { Component } from 'react';

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

    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(event) {
    const { value } = event.target;
    this.setState({
      title: value
    })
  }

  render() {
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <div>
          <label htmlFor="" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={this.state.title}
              data-testid="title-input"
              onChange={this.handleTitleChange}
            />
          </label>
        </div>
      </form>
    );
  }
}

export default AddMovie;
