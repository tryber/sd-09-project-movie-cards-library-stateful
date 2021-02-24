import React from 'react';

class Header extends React.Component {
  render() {
    console.log(this)
    return (
      <header className="movie-card-header">
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
