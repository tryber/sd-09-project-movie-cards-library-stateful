import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.changeContent = this.changeContent.bind(this);

    this.state = {
      // subtitle: '',
      title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  changeContent({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title,
    } = this.state;

    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="inputTitle">
          Título:
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.changeContent }
          />
        </label>

      </form>
    );
  }
}

export default AddMovie;
