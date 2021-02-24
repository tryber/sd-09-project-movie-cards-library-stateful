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
      genre: 'action'
    }
  }

  render() {
    const onClick = this.props;
    return (
      <p>teste</p>
    );
  }
}

export default AddMovie;
