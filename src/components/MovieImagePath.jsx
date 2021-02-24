import React from 'react';

class MovieImagePath extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label data-testid="image-input-label">
        Imagem
        <input 
          type="text"
          name="imagePath"
          value={value} 
          data-testid="image-input"
          onChange={changeHandler}
        />
      </label>
    );
  }
}

export default MovieImagePath;