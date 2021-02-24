import React from 'react';

class MovieTitle extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label data-testid="title-input-label">
        Título
        <input 
          type="text"
          name="title"
          value={value} 
          data-testid="title-input"
          onChange={changeHandler}
        />
      </label>
    );
  }
}

export default MovieTitle;