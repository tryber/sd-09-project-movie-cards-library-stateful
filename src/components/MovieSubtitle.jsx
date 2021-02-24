import React from 'react';

class MovieSubtitle extends React.Component {
  render() {
    const { value, changeHandler } = this.props;
    return (
      <label htmlFor="MovieSubtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ changeHandler }
        />
      </label>
    );
  }
}

export default MovieSubtitle;
