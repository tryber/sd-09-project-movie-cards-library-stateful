import React from 'react';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { title, subtitle } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleInput value={ title } onChange={ this.handleChange } />
          <SubtitleInput value={ subtitle } onChange={ this.handleChange } />
        </form>
      </div>
    );
  }
}

export default AddMovie;
