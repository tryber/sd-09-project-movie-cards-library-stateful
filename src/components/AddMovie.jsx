// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    return (
      <div>Componente</div>
    );
  }
}
export default AddMovie;
