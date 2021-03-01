// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateSubTitle = this.updateTitle.bind(this);
  }

  updateTitle(event) {
    const { title } = this.state;
    this.setState({ title: event.target.value });
    console.log(title);
  }

  updateSubTitle(event) {
    const { subtitle } = this.state;
    this.setState({ subtitle: event.target.value });
    console.log(subtitle);
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
          <br />
          <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              data-testid="subtitle-input"
              onChange={ this.updateSubTitle }
              id="subtitle-input-label"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
