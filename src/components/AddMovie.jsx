// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(event) {
    const { title } = this.state;
    this.setState({ title: event.target.value });
    console.log(title);
  }

  render() {
    return (
      <div>
        <p>teste</p>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input-label" data-testid="title-input-label">
            Título
            <input
              type="text"
              data-testid="title-input"
              onChange={ this.updateTitle }
              id="title-input-label"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
