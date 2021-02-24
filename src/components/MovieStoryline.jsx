import React from 'react';

class MovieStoryline extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label data-testid="storyline-input-label">
        Sinopse
        <textarea 
          name="storyLine"
          value={value} 
          data-testid="storyline-input"
          onChange={changeHandler}
        />
      </label>
    );
  }
}

export default MovieStoryline;
