import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      storyline: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, storyline } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor="title-input-label">
            Título
            <input
              data-testid="title-input"
              htmlFor="title-input-label"
              value={ title }
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
          {/* <label data-testid="subtitle-input-label" htmlFor="sb-input-label">
            Subtítulo
            <input
              type="text"
              htmlFor="sb-input-label"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label> */}
        </form>
      </div>
    );
  }
}
