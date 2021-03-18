import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyline: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input
              data-testid="title-input"
              htmlFor="title-input-label"
              type="text"
            />
          </label>
          <label data-testid="storyline-input-label" htmlFor="textarea">
            Sinopse
            <textarea
              htmlFor="textarea"
              data-testid="storyline-input"
              value={ storyline }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}
