import React from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    // const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      // movies,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState = {
      [name]: value,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          handleChange={ this.handleChange }
        />
        <h1>teste</h1>
      </div>
    );
  }
}
