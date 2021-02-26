import React from 'react';
// import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select id="genre" value={ genre } data-testid="genre-input">
          <option>Ação</option>
          <option>Comédia</option>
          <option>Suspense</option>
        </select>
      </label>
    );
  }
}

// SelectGenre.propTypes = {
//
// };

export default SelectGenre;
