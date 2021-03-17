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
        <label data-testid="storyline-input-label" htmlFor="textarea">
          <textarea
            htmlFor="textarea"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}
