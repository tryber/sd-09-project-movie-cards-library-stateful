// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleTitle() {
    console.log('title');
  }

  render() {
    return(
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
            <input type="text" 
              title={ this.state.title }
                data-testid="title-input"
                onChange={ this.handleTitle }
            />
          </label>
          <button onClick={ () => {} }></button>
        </form>               
    </div> 
    );
  }
}

export default AddMovie;
